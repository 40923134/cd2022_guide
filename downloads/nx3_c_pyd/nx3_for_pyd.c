#include <string.h>
#include <stdio.h>
#include <stdlib.h>

#include <uf.h>
#include <uf_attr.h>
#include <uf_curve.h>
#include <uf_cfi.h>
#include <uf_csys.h>
#include <uf_disp.h>
#include <uf_obj.h>
#include <uf_object_types.h>
#include <uf_part.h>

// for block creation
#include <uf_exit.h>
#include <uf_modl.h>

// for stl 資料轉出
#include <uf_std.h>

#include <Python.h>

// NX initialization
extern int nx3init(void)
{
    UF_initialize();
    return 0;
}

static PyObject* mod_nx3init(PyObject *self, PyObject *args)
{
    int fail = 0;
    // ii 表示兩個輸入變數都是整數
    nx3init();
    // i 表示 s 為整數
    return Py_BuildValue("i",fail);
}

extern int nx3term(void)
{
    UF_terminate();
    return 0;
}

static PyObject* mod_nx3term(PyObject *self, PyObject *args)
{
    int fail = 0;
    // ii 表示兩個輸入變數都是整數
    nx3term();
    // i 表示 s 為整數
    return Py_BuildValue("i",fail);
}

// 定義內部運算的函式內容
extern int nx3(int a, int b)
{
  tag_t  part_tag;
  tag_t  reopen_part_tag;
  /* Open a new part then save it. */
  //UF_initialize();
  UF_PART_new("a_blank_part.prt",UF_PART_ENGLISH,&part_tag);
  UF_PART_save();
  //UF_terminate();
  return a+b;
}

// sum 函式的 interface
static PyObject* mod_nx3(PyObject *self, PyObject *args)
{
    int a;
    int b;
    int s;
    // ii 表示兩個輸入變數都是整數
    if (!PyArg_ParseTuple(args,"ii",&a,&b))
       return NULL;
    // 這裡的 sum2 則是內部的函式定義, 與外部呼叫模組或函式名稱沒有直接關係
    s = nx3(a,b);
    // i 表示 s 為整數
    return Py_BuildValue("i",s);
}

// 定義內部運算的函式內容
extern int nx4(int a, int b)
{
  tag_t  part_tag;
  tag_t  reopen_part_tag;
  //UF_initialize();
  UF_PART_new("abc_blank_part.prt",UF_PART_ENGLISH,&part_tag);
  UF_PART_save();
  //UF_terminate();
  return a-b;
}

// sum 函式的 interface
static PyObject* mod_nx4(PyObject *self, PyObject *args)
{
    int a;
    int b;
    int s;
    // ii 表示兩個輸入變數都是整數
    if (!PyArg_ParseTuple(args,"ii",&a,&b))
       return NULL;
    // 這裡的 sum2 則是內部的函式定義, 與外部呼叫模組或函式名稱沒有直接關係
    s = nx4(a,b);
    // i 表示 s 為整數
    return Py_BuildValue("i",s);
}

// 建立 block 的函式處理
extern int nx3block(double corner0, double corner1, double corner2, char* edge0, char* edge1, char* edge2)
{
    double corner[3] ={corner0,corner1,corner2};
    // 指定長寬高
    char* edge[3] = {edge0,edge1,edge2};
    tag_t  block_tag;
    UF_PART_new("abc_blank_part.prt",UF_PART_ENGLISH,&block_tag);
    UF_MODL_create_block(UF_NULLSIGN,NULL_TAG,corner,edge,&block_tag);
    return 0;
}

static PyObject* mod_nx3block(PyObject *self, PyObject *args)
{
    double corner0, corner1, corner2;
    char *edge0, *edge1, *edge2;
    int fail = 0;
    // ii 表示兩個輸入變數都是整數
    if (!PyArg_ParseTuple(args,"dddsss",&corner0,&corner1,&corner2,&edge0,&edge1,&edge2))
       return NULL;
    fail = nx3block(corner0,corner1,corner2,edge0,edge1,edge2);
    // i 表示 fail 為整數
    return Py_BuildValue("i",fail);
}

// 開啟零件檔案
extern int partopen(char* filename)
{
    UF_PART_load_status_t load_status;
    tag_t part;
    int ifail = 0;
    // 根據使用者所要處理的檔案, 將零件檔案打開
    ifail = UF_PART_open(filename,&part,&load_status);
    return ifail;
}

static PyObject* mod_partopen(PyObject *self, PyObject *args)
{
    char* filename;
    int fail = 0;
    if (!PyArg_ParseTuple(args,"s",&filename))
       return NULL;
    fail = partopen(filename);
    // i 表示 fail 為整數
    return Py_BuildValue("i",fail);
}

// 關閉零件檔案
extern int partclose(char* filename)
{
    int ifail = 0;
    tag_t part_tag;
    part_tag = UF_PART_ask_part_tag(filename);
    ifail = UF_PART_close(part_tag, 1, 1);
    return ifail;
}

static PyObject* mod_partclose(PyObject *self, PyObject *args)
{
    char* filename;
    int fail = 0;
    if (!PyArg_ParseTuple(args,"s",&filename))
       return NULL;
    fail = partclose(filename);
    // i 表示 fail 為整數
    return Py_BuildValue("i",fail);
}

extern int partsaveas(char* filename)
{
    UF_PART_save_as(filename);
    return 0;
}

static PyObject* mod_partsaveas(PyObject *self, PyObject *args)
{
    char* filename;
    int fail = 0;
    // ii 表示兩個輸入變數都是整數
    if (!PyArg_ParseTuple(args,"s",&filename))
       return NULL;
    fail = partsaveas(filename);
    // i 表示 fail 為整數
    return Py_BuildValue("i",fail);
}

extern int editexp(char* exp)
{
    // exp should be something like "p0=10"
    int ifail = 0;
    ifail = UF_MODL_edit_exp(exp);
    return ifail;
}

static PyObject* mod_editexp(PyObject *self, PyObject *args)
{
    char *exp, *str;
    double dimension;
    int fail = 0;
    // ii 表示兩個輸入變數都是整數
    if (!PyArg_ParseTuple(args,"sd",&exp,&dimension))
       return NULL;
    str = malloc(256);
    sprintf(str,"%s=%G",exp,dimension);
    fail = editexp(str);
    free(str);
    // i 表示 fail 為整數
    return Py_BuildValue("i",fail);
}

extern int modelupdate()
{
    // exp should be something like "p0=10"
    int ifail = 0;
    ifail = UF_MODL_update();
    return ifail;
}

static PyObject* mod_modelupdate(PyObject *self, PyObject *args)
{
    int fail = 0;
    fail = modelupdate();
    // i 表示 fail 為整數
    return Py_BuildValue("i",fail);
}

// 計算特定零件的體積資料

// 將零件轉為 STL 檔案, 文字格式或二位元格式
// 開啟文字格式的 STL 檔案
extern int savetextstl(char* filename)
{
    void * file_handle;
    int ifail = 0;
    tag_t body_tag;
    int num_errors;
    UF_STD_stl_error_p_t  error_info;
    ifail = UF_STD_open_text_stl_file(filename,TRUE,&file_handle);
    // 擷取零件中的實體 (type=70, subtype=0) 資料 
    UF_MODL_ask_object(70,0,&body_tag);
    // 由 UF_MODL_ask_object 取得的 tag 確實為 body tag
    ifail = UF_STD_put_solid_in_stl_file(
    file_handle,
    NULL_TAG,
    body_tag,
    0.1,
    0.5,
    0.05,
    &num_errors,
    &error_info);
    ifail = UF_STD_close_stl_file (file_handle);
    return ifail;
}

static PyObject* mod_savetextstl(PyObject *self, PyObject *args)
{
    char* filename;
    int fail = 0;
    if (!PyArg_ParseTuple(args,"s",&filename))
       return NULL;
    fail = savetextstl(filename);
    // i 表示 fail 為整數
    return Py_BuildValue("i",fail);
}

// 開啟二位元格式的 STL 檔案
extern int savebinstl(char* filename)
{
    void * file_handle;
    int ifail = 0;
    tag_t body_tag;
    int num_errors;
    UF_STD_stl_error_p_t  error_info;
    // TRUE append
    // FALSE not append
    // apply filename as header
    ifail = UF_STD_open_binary_stl_file(filename,TRUE,filename,&file_handle);
    /*
extern int UF_STD_open_binary_stl_file (
char * file_name,
logical append,
char * header,
void ** file_handle );
char * 	file_name	Input	Name of STL file to be written
logical 	append	Input	Append flag:
TRUE = Append
FALSE = No append
char * 	header	Input	Header text for start of binary file
void ** 	file_handle	Output	Handle of file
*/
    // 擷取零件中的實體 (type=70, subtype=0) 資料 
    UF_MODL_ask_object(70,0,&body_tag);
    // 由 UF_MODL_ask_object 取得的 tag 確實為 body tag
    ifail = UF_STD_put_solid_in_stl_file(
    file_handle,
    NULL_TAG,
    body_tag,
    0.1,
    0.5,
    0.05,
    &num_errors,
    &error_info);
    ifail = UF_STD_close_stl_file (file_handle);
    return ifail;
}

static PyObject* mod_savebinstl(PyObject *self, PyObject *args)
{
    char* filename;
    int fail = 0;
    if (!PyArg_ParseTuple(args,"s",&filename))
       return NULL;
    fail = savebinstl(filename);
    // i 表示 fail 為整數
    return Py_BuildValue("i",fail);
}

// ask part volume, 這裡使用的單位為 cm^3
extern double askvolume()
{
    void * file_handle;
    int ifail = 0;
    tag_t body_tag;
    char *str;
    // 配合設定不同物理條件的精確度
    double  acc_val[11] = {.01,0,0,0,0,0,0,0,0,0,0};
    double  massprop[47];
    double  massprop_stat[13];
    // 擷取零件中的實體 (type=70, subtype=0) 資料 
    UF_MODL_ask_object(70,0,&body_tag);
    // 這裡假設零件檔案中只有一個實體
    //求質量特性，
    UF_MODL_ask_mass_props_3d(&body_tag,1,1,3,1.0,1,acc_val,massprop,massprop_stat);
    return massprop[1];
}

static PyObject* mod_askvolume(PyObject *self, PyObject *args)
{
    double volume;
    int fail = 0;
    volume = askvolume();
    // i 表示 fail 為整數
    return Py_BuildValue("d",volume);
}

// 與函式對應的結構定義
static struct PyMethodDef Mod_Nx3[] = {
    {"nx3", mod_nx3, METH_VARARGS, "Description.."},
    {"nx4", mod_nx4, METH_VARARGS, "Description.."},
    {"nx3init", mod_nx3init, METH_VARARGS, "NX3 initilization function"},
    {"nx3term", mod_nx3term, METH_VARARGS, "NX3 termination function"},
    {"nx3block", mod_nx3block, METH_VARARGS, "Block Creation"},
    {"partsaveas", mod_partsaveas, METH_VARARGS, "part save as"},
    {"partopen", mod_partopen, METH_VARARGS, "part open"},
    {"partclose", mod_partclose, METH_VARARGS, "part open"},
    {"editexp", mod_editexp, METH_VARARGS, "edit expression"},
    {"modelupdate", mod_modelupdate, METH_VARARGS, "model update"},
    {"savetextstl", mod_savetextstl, METH_VARARGS, "open text stl"},
    {"savebinstl", mod_savebinstl, METH_VARARGS, "open binary stl"},
    {"askvolume", mod_askvolume, METH_VARARGS, "ask part volume"},
    {NULL,NULL,0,NULL},
};

// 模組結構定義
// 配合 Python 3 新增的模組結構定義
static struct PyModuleDef ModNx3 = {
   PyModuleDef_HEAD_INIT,
   "Nx3Module",   /* 模組名稱 */
   "Nx3Module_doc", /* 模組文件, may be NULL */
   -1,       /* size of per-interpreter state of the module,
                or -1 if the module keeps state in global variables. */
   Mod_Nx3// 函式結構名稱
};

// 模組起始
// PyInit_ 後必須使用"名稱".pyd 中的模組名稱, 以便啟動
// 換言之, 若編譯連結後的動態模組名稱為 nx3.pyd, 則此地的起始函式名稱必須為 PyInit_nx3
PyMODINIT_FUNC 
PyInit_nx3(void)
{
    // 建立模組的起始, 輸入為模組結構名稱之 address
    (void) PyModule_Create(&ModNx3);
}
