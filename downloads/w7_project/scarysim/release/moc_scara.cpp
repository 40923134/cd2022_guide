/****************************************************************************
** Meta object code from reading C++ file 'scara.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.15.2)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include <memory>
#include "../scara.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'scara.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.15.2. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_Scara_t {
    QByteArrayData data[30];
    char stringdata0[169];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_Scara_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_Scara_t qt_meta_stringdata_Scara = {
    {
QT_MOC_LITERAL(0, 0, 5), // "Scara"
QT_MOC_LITERAL(1, 6, 2), // "go"
QT_MOC_LITERAL(2, 9, 0), // ""
QT_MOC_LITERAL(3, 10, 2), // "dt"
QT_MOC_LITERAL(4, 13, 11), // "displayPath"
QT_MOC_LITERAL(5, 25, 7), // "display"
QT_MOC_LITERAL(6, 33, 6), // "getTh1"
QT_MOC_LITERAL(7, 40, 6), // "getTh2"
QT_MOC_LITERAL(8, 47, 4), // "getX"
QT_MOC_LITERAL(9, 52, 4), // "getY"
QT_MOC_LITERAL(10, 57, 4), // "getZ"
QT_MOC_LITERAL(11, 62, 6), // "setTh1"
QT_MOC_LITERAL(12, 69, 3), // "th1"
QT_MOC_LITERAL(13, 73, 6), // "setTh2"
QT_MOC_LITERAL(14, 80, 3), // "th2"
QT_MOC_LITERAL(15, 84, 4), // "setZ"
QT_MOC_LITERAL(16, 89, 1), // "z"
QT_MOC_LITERAL(17, 91, 7), // "setMode"
QT_MOC_LITERAL(18, 99, 12), // "SteeringMode"
QT_MOC_LITERAL(19, 112, 4), // "mode"
QT_MOC_LITERAL(20, 117, 9), // "setTarget"
QT_MOC_LITERAL(21, 127, 2), // "tx"
QT_MOC_LITERAL(22, 130, 2), // "ty"
QT_MOC_LITERAL(23, 133, 2), // "tz"
QT_MOC_LITERAL(24, 136, 5), // "kinPr"
QT_MOC_LITERAL(25, 142, 7), // "kinOdwr"
QT_MOC_LITERAL(26, 150, 9), // "calcSpeed"
QT_MOC_LITERAL(27, 160, 2), // "vx"
QT_MOC_LITERAL(28, 163, 2), // "vy"
QT_MOC_LITERAL(29, 166, 2) // "vz"

    },
    "Scara\0go\0\0dt\0displayPath\0display\0"
    "getTh1\0getTh2\0getX\0getY\0getZ\0setTh1\0"
    "th1\0setTh2\0th2\0setZ\0z\0setMode\0"
    "SteeringMode\0mode\0setTarget\0tx\0ty\0tz\0"
    "kinPr\0kinOdwr\0calcSpeed\0vx\0vy\0vz"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_Scara[] = {

 // content:
       8,       // revision
       0,       // classname
       0,    0, // classinfo
      16,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    1,   94,    2, 0x0a /* Public */,
       4,    0,   97,    2, 0x0a /* Public */,
       5,    0,   98,    2, 0x0a /* Public */,
       6,    0,   99,    2, 0x0a /* Public */,
       7,    0,  100,    2, 0x0a /* Public */,
       8,    0,  101,    2, 0x0a /* Public */,
       9,    0,  102,    2, 0x0a /* Public */,
      10,    0,  103,    2, 0x0a /* Public */,
      11,    1,  104,    2, 0x0a /* Public */,
      13,    1,  107,    2, 0x0a /* Public */,
      15,    1,  110,    2, 0x0a /* Public */,
      17,    1,  113,    2, 0x0a /* Public */,
      20,    3,  116,    2, 0x0a /* Public */,
      24,    0,  123,    2, 0x08 /* Private */,
      25,    0,  124,    2, 0x08 /* Private */,
      26,    3,  125,    2, 0x08 /* Private */,

 // slots: parameters
    QMetaType::Void, QMetaType::Double,    3,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Double,
    QMetaType::Double,
    QMetaType::Double,
    QMetaType::Double,
    QMetaType::Double,
    QMetaType::Void, QMetaType::Double,   12,
    QMetaType::Void, QMetaType::Double,   14,
    QMetaType::Void, QMetaType::Double,   16,
    QMetaType::Void, 0x80000000 | 18,   19,
    QMetaType::Void, QMetaType::Double, QMetaType::Double, QMetaType::Double,   21,   22,   23,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Bool, QMetaType::Double, QMetaType::Double, QMetaType::Double,   27,   28,   29,

       0        // eod
};

void Scara::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        auto *_t = static_cast<Scara *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->go((*reinterpret_cast< double(*)>(_a[1]))); break;
        case 1: _t->displayPath(); break;
        case 2: _t->display(); break;
        case 3: { double _r = _t->getTh1();
            if (_a[0]) *reinterpret_cast< double*>(_a[0]) = std::move(_r); }  break;
        case 4: { double _r = _t->getTh2();
            if (_a[0]) *reinterpret_cast< double*>(_a[0]) = std::move(_r); }  break;
        case 5: { double _r = _t->getX();
            if (_a[0]) *reinterpret_cast< double*>(_a[0]) = std::move(_r); }  break;
        case 6: { double _r = _t->getY();
            if (_a[0]) *reinterpret_cast< double*>(_a[0]) = std::move(_r); }  break;
        case 7: { double _r = _t->getZ();
            if (_a[0]) *reinterpret_cast< double*>(_a[0]) = std::move(_r); }  break;
        case 8: _t->setTh1((*reinterpret_cast< double(*)>(_a[1]))); break;
        case 9: _t->setTh2((*reinterpret_cast< double(*)>(_a[1]))); break;
        case 10: _t->setZ((*reinterpret_cast< double(*)>(_a[1]))); break;
        case 11: _t->setMode((*reinterpret_cast< SteeringMode(*)>(_a[1]))); break;
        case 12: _t->setTarget((*reinterpret_cast< double(*)>(_a[1])),(*reinterpret_cast< double(*)>(_a[2])),(*reinterpret_cast< double(*)>(_a[3]))); break;
        case 13: _t->kinPr(); break;
        case 14: _t->kinOdwr(); break;
        case 15: { bool _r = _t->calcSpeed((*reinterpret_cast< double(*)>(_a[1])),(*reinterpret_cast< double(*)>(_a[2])),(*reinterpret_cast< double(*)>(_a[3])));
            if (_a[0]) *reinterpret_cast< bool*>(_a[0]) = std::move(_r); }  break;
        default: ;
        }
    }
}

QT_INIT_METAOBJECT const QMetaObject Scara::staticMetaObject = { {
    QMetaObject::SuperData::link<QObject::staticMetaObject>(),
    qt_meta_stringdata_Scara.data,
    qt_meta_data_Scara,
    qt_static_metacall,
    nullptr,
    nullptr
} };


const QMetaObject *Scara::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *Scara::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_Scara.stringdata0))
        return static_cast<void*>(this);
    return QObject::qt_metacast(_clname);
}

int Scara::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QObject::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 16)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 16;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 16)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 16;
    }
    return _id;
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
