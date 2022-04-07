/****************************************************************************
** Meta object code from reading C++ file 'mainwindow.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.15.2)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include <memory>
#include "../mainwindow.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'mainwindow.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.15.2. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_MainWindow_t {
    QByteArrayData data[12];
    char stringdata0[288];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_MainWindow_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_MainWindow_t qt_meta_stringdata_MainWindow = {
    {
QT_MOC_LITERAL(0, 0, 10), // "MainWindow"
QT_MOC_LITERAL(1, 11, 2), // "go"
QT_MOC_LITERAL(2, 14, 0), // ""
QT_MOC_LITERAL(3, 15, 35), // "on_verticalSliderPitch_valueC..."
QT_MOC_LITERAL(4, 51, 5), // "value"
QT_MOC_LITERAL(5, 57, 35), // "on_horizontalSliderYaw_valueC..."
QT_MOC_LITERAL(6, 93, 35), // "on_horizontalSliderTh1_valueC..."
QT_MOC_LITERAL(7, 129, 35), // "on_horizontalSliderTh2_valueC..."
QT_MOC_LITERAL(8, 165, 33), // "on_horizontalSliderZ_valueCha..."
QT_MOC_LITERAL(9, 199, 30), // "on_commandLinkButtonGo_clicked"
QT_MOC_LITERAL(10, 230, 28), // "on_radioButtonSimple_clicked"
QT_MOC_LITERAL(11, 259, 28) // "on_radioButtonTarget_clicked"

    },
    "MainWindow\0go\0\0on_verticalSliderPitch_valueChanged\0"
    "value\0on_horizontalSliderYaw_valueChanged\0"
    "on_horizontalSliderTh1_valueChanged\0"
    "on_horizontalSliderTh2_valueChanged\0"
    "on_horizontalSliderZ_valueChanged\0"
    "on_commandLinkButtonGo_clicked\0"
    "on_radioButtonSimple_clicked\0"
    "on_radioButtonTarget_clicked"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_MainWindow[] = {

 // content:
       8,       // revision
       0,       // classname
       0,    0, // classinfo
       9,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    0,   59,    2, 0x08 /* Private */,
       3,    1,   60,    2, 0x08 /* Private */,
       5,    1,   63,    2, 0x08 /* Private */,
       6,    1,   66,    2, 0x08 /* Private */,
       7,    1,   69,    2, 0x08 /* Private */,
       8,    1,   72,    2, 0x08 /* Private */,
       9,    0,   75,    2, 0x08 /* Private */,
      10,    0,   76,    2, 0x08 /* Private */,
      11,    0,   77,    2, 0x08 /* Private */,

 // slots: parameters
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int,    4,
    QMetaType::Void, QMetaType::Int,    4,
    QMetaType::Void, QMetaType::Int,    4,
    QMetaType::Void, QMetaType::Int,    4,
    QMetaType::Void, QMetaType::Int,    4,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,

       0        // eod
};

void MainWindow::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        auto *_t = static_cast<MainWindow *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->go(); break;
        case 1: _t->on_verticalSliderPitch_valueChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 2: _t->on_horizontalSliderYaw_valueChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 3: _t->on_horizontalSliderTh1_valueChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 4: _t->on_horizontalSliderTh2_valueChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 5: _t->on_horizontalSliderZ_valueChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 6: _t->on_commandLinkButtonGo_clicked(); break;
        case 7: _t->on_radioButtonSimple_clicked(); break;
        case 8: _t->on_radioButtonTarget_clicked(); break;
        default: ;
        }
    }
}

QT_INIT_METAOBJECT const QMetaObject MainWindow::staticMetaObject = { {
    QMetaObject::SuperData::link<QMainWindow::staticMetaObject>(),
    qt_meta_stringdata_MainWindow.data,
    qt_meta_data_MainWindow,
    qt_static_metacall,
    nullptr,
    nullptr
} };


const QMetaObject *MainWindow::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *MainWindow::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_MainWindow.stringdata0))
        return static_cast<void*>(this);
    return QMainWindow::qt_metacast(_clname);
}

int MainWindow::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QMainWindow::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 9)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 9;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 9)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 9;
    }
    return _id;
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
