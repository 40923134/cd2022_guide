/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 5.15.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QCommandLinkButton>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QGroupBox>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QRadioButton>
#include <QtWidgets/QSlider>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QWidget>
#include "glwidget.h"

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralWidget;
    GLWidget *view;
    QSlider *horizontalSliderYaw;
    QSlider *verticalSliderPitch;
    QGroupBox *groupBoxSimple;
    QWidget *layoutWidget;
    QGridLayout *gridLayout;
    QSlider *horizontalSliderTh1;
    QLabel *label_2;
    QSlider *horizontalSliderTh2;
    QLabel *label_3;
    QSlider *horizontalSliderZ;
    QLabel *label;
    QGroupBox *groupBox_2;
    QLabel *label_4;
    QLabel *label_5;
    QLabel *label_6;
    QLabel *labelZ;
    QLabel *labelY;
    QLabel *labelX;
    QLabel *label_10;
    QLabel *labelThZ;
    QLabel *labelTh1;
    QLabel *label_11;
    QLabel *label_12;
    QLabel *labelTh2;
    QGroupBox *groupBoxTarget;
    QLineEdit *lineEditTx;
    QLineEdit *lineEditTy;
    QCommandLinkButton *commandLinkButtonGo;
    QLabel *label_9;
    QLabel *label_7;
    QLabel *label_8;
    QLineEdit *lineEditTz;
    QGroupBox *groupBox_3;
    QRadioButton *radioButtonSimple;
    QRadioButton *radioButtonTarget;
    QMenuBar *menuBar;
    QStatusBar *statusBar;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName(QString::fromUtf8("MainWindow"));
        MainWindow->resize(1000, 600);
        MainWindow->setMinimumSize(QSize(1000, 600));
        MainWindow->setMaximumSize(QSize(1000, 600));
        centralWidget = new QWidget(MainWindow);
        centralWidget->setObjectName(QString::fromUtf8("centralWidget"));
        view = new GLWidget(centralWidget);
        view->setObjectName(QString::fromUtf8("view"));
        view->setGeometry(QRect(340, 30, 640, 480));
        horizontalSliderYaw = new QSlider(centralWidget);
        horizontalSliderYaw->setObjectName(QString::fromUtf8("horizontalSliderYaw"));
        horizontalSliderYaw->setGeometry(QRect(340, 530, 641, 21));
        horizontalSliderYaw->setMinimum(-180);
        horizontalSliderYaw->setMaximum(180);
        horizontalSliderYaw->setOrientation(Qt::Horizontal);
        horizontalSliderYaw->setTickPosition(QSlider::TicksAbove);
        horizontalSliderYaw->setTickInterval(10);
        verticalSliderPitch = new QSlider(centralWidget);
        verticalSliderPitch->setObjectName(QString::fromUtf8("verticalSliderPitch"));
        verticalSliderPitch->setGeometry(QRect(300, 30, 21, 481));
        verticalSliderPitch->setMinimum(-90);
        verticalSliderPitch->setMaximum(90);
        verticalSliderPitch->setValue(30);
        verticalSliderPitch->setOrientation(Qt::Vertical);
        verticalSliderPitch->setTickPosition(QSlider::TicksBelow);
        verticalSliderPitch->setTickInterval(10);
        groupBoxSimple = new QGroupBox(centralWidget);
        groupBoxSimple->setObjectName(QString::fromUtf8("groupBoxSimple"));
        groupBoxSimple->setGeometry(QRect(20, 130, 251, 141));
        layoutWidget = new QWidget(groupBoxSimple);
        layoutWidget->setObjectName(QString::fromUtf8("layoutWidget"));
        layoutWidget->setGeometry(QRect(20, 20, 211, 111));
        gridLayout = new QGridLayout(layoutWidget);
        gridLayout->setSpacing(6);
        gridLayout->setContentsMargins(11, 11, 11, 11);
        gridLayout->setObjectName(QString::fromUtf8("gridLayout"));
        gridLayout->setContentsMargins(0, 0, 0, 0);
        horizontalSliderTh1 = new QSlider(layoutWidget);
        horizontalSliderTh1->setObjectName(QString::fromUtf8("horizontalSliderTh1"));
        horizontalSliderTh1->setMinimum(-180);
        horizontalSliderTh1->setMaximum(180);
        horizontalSliderTh1->setOrientation(Qt::Horizontal);
        horizontalSliderTh1->setTickPosition(QSlider::TicksBelow);
        horizontalSliderTh1->setTickInterval(10);

        gridLayout->addWidget(horizontalSliderTh1, 0, 2, 1, 1);

        label_2 = new QLabel(layoutWidget);
        label_2->setObjectName(QString::fromUtf8("label_2"));

        gridLayout->addWidget(label_2, 1, 0, 1, 2);

        horizontalSliderTh2 = new QSlider(layoutWidget);
        horizontalSliderTh2->setObjectName(QString::fromUtf8("horizontalSliderTh2"));
        horizontalSliderTh2->setMinimum(-180);
        horizontalSliderTh2->setMaximum(180);
        horizontalSliderTh2->setValue(90);
        horizontalSliderTh2->setOrientation(Qt::Horizontal);
        horizontalSliderTh2->setTickPosition(QSlider::TicksBelow);
        horizontalSliderTh2->setTickInterval(10);

        gridLayout->addWidget(horizontalSliderTh2, 1, 2, 1, 1);

        label_3 = new QLabel(layoutWidget);
        label_3->setObjectName(QString::fromUtf8("label_3"));

        gridLayout->addWidget(label_3, 2, 0, 1, 2);

        horizontalSliderZ = new QSlider(layoutWidget);
        horizontalSliderZ->setObjectName(QString::fromUtf8("horizontalSliderZ"));
        horizontalSliderZ->setMaximum(50);
        horizontalSliderZ->setTracking(true);
        horizontalSliderZ->setOrientation(Qt::Horizontal);
        horizontalSliderZ->setInvertedAppearance(false);
        horizontalSliderZ->setTickPosition(QSlider::TicksBelow);
        horizontalSliderZ->setTickInterval(5);

        gridLayout->addWidget(horizontalSliderZ, 2, 2, 1, 1);

        label = new QLabel(layoutWidget);
        label->setObjectName(QString::fromUtf8("label"));

        gridLayout->addWidget(label, 0, 0, 1, 2);

        groupBox_2 = new QGroupBox(centralWidget);
        groupBox_2->setObjectName(QString::fromUtf8("groupBox_2"));
        groupBox_2->setGeometry(QRect(20, 410, 251, 101));
        label_4 = new QLabel(groupBox_2);
        label_4->setObjectName(QString::fromUtf8("label_4"));
        label_4->setGeometry(QRect(131, 21, 16, 19));
        QFont font;
        font.setPointSize(12);
        font.setBold(true);
        font.setWeight(75);
        label_4->setFont(font);
        label_5 = new QLabel(groupBox_2);
        label_5->setObjectName(QString::fromUtf8("label_5"));
        label_5->setGeometry(QRect(131, 46, 16, 19));
        label_5->setFont(font);
        label_6 = new QLabel(groupBox_2);
        label_6->setObjectName(QString::fromUtf8("label_6"));
        label_6->setGeometry(QRect(131, 71, 16, 19));
        label_6->setFont(font);
        labelZ = new QLabel(groupBox_2);
        labelZ->setObjectName(QString::fromUtf8("labelZ"));
        labelZ->setGeometry(QRect(179, 71, 51, 16));
        QFont font1;
        font1.setPointSize(8);
        font1.setBold(false);
        font1.setWeight(50);
        labelZ->setFont(font1);
        labelY = new QLabel(groupBox_2);
        labelY->setObjectName(QString::fromUtf8("labelY"));
        labelY->setGeometry(QRect(179, 46, 51, 16));
        labelY->setFont(font1);
        labelX = new QLabel(groupBox_2);
        labelX->setObjectName(QString::fromUtf8("labelX"));
        labelX->setGeometry(QRect(179, 21, 51, 16));
        labelX->setFont(font1);
        label_10 = new QLabel(groupBox_2);
        label_10->setObjectName(QString::fromUtf8("label_10"));
        label_10->setGeometry(QRect(21, 21, 22, 19));
        label_10->setFont(font);
        labelThZ = new QLabel(groupBox_2);
        labelThZ->setObjectName(QString::fromUtf8("labelThZ"));
        labelThZ->setGeometry(QRect(69, 71, 51, 16));
        labelThZ->setFont(font1);
        labelTh1 = new QLabel(groupBox_2);
        labelTh1->setObjectName(QString::fromUtf8("labelTh1"));
        labelTh1->setGeometry(QRect(69, 21, 51, 16));
        labelTh1->setFont(font1);
        label_11 = new QLabel(groupBox_2);
        label_11->setObjectName(QString::fromUtf8("label_11"));
        label_11->setGeometry(QRect(21, 46, 22, 19));
        label_11->setFont(font);
        label_12 = new QLabel(groupBox_2);
        label_12->setObjectName(QString::fromUtf8("label_12"));
        label_12->setGeometry(QRect(21, 71, 16, 19));
        label_12->setFont(font);
        labelTh2 = new QLabel(groupBox_2);
        labelTh2->setObjectName(QString::fromUtf8("labelTh2"));
        labelTh2->setGeometry(QRect(69, 46, 51, 16));
        labelTh2->setFont(font1);
        groupBoxTarget = new QGroupBox(centralWidget);
        groupBoxTarget->setObjectName(QString::fromUtf8("groupBoxTarget"));
        groupBoxTarget->setEnabled(false);
        groupBoxTarget->setGeometry(QRect(20, 280, 251, 121));
        lineEditTx = new QLineEdit(groupBoxTarget);
        lineEditTx->setObjectName(QString::fromUtf8("lineEditTx"));
        lineEditTx->setGeometry(QRect(50, 20, 113, 20));
        lineEditTy = new QLineEdit(groupBoxTarget);
        lineEditTy->setObjectName(QString::fromUtf8("lineEditTy"));
        lineEditTy->setGeometry(QRect(50, 50, 113, 20));
        commandLinkButtonGo = new QCommandLinkButton(groupBoxTarget);
        commandLinkButtonGo->setObjectName(QString::fromUtf8("commandLinkButtonGo"));
        commandLinkButtonGo->setGeometry(QRect(170, 40, 61, 41));
        label_9 = new QLabel(groupBoxTarget);
        label_9->setObjectName(QString::fromUtf8("label_9"));
        label_9->setGeometry(QRect(20, 50, 16, 19));
        label_9->setFont(font);
        label_7 = new QLabel(groupBoxTarget);
        label_7->setObjectName(QString::fromUtf8("label_7"));
        label_7->setGeometry(QRect(20, 80, 16, 19));
        label_7->setFont(font);
        label_8 = new QLabel(groupBoxTarget);
        label_8->setObjectName(QString::fromUtf8("label_8"));
        label_8->setGeometry(QRect(20, 25, 16, 19));
        label_8->setFont(font);
        lineEditTz = new QLineEdit(groupBoxTarget);
        lineEditTz->setObjectName(QString::fromUtf8("lineEditTz"));
        lineEditTz->setGeometry(QRect(50, 80, 113, 20));
        groupBox_3 = new QGroupBox(centralWidget);
        groupBox_3->setObjectName(QString::fromUtf8("groupBox_3"));
        groupBox_3->setGeometry(QRect(20, 30, 251, 91));
        radioButtonSimple = new QRadioButton(groupBox_3);
        radioButtonSimple->setObjectName(QString::fromUtf8("radioButtonSimple"));
        radioButtonSimple->setGeometry(QRect(20, 20, 101, 17));
        radioButtonSimple->setChecked(true);
        radioButtonTarget = new QRadioButton(groupBox_3);
        radioButtonTarget->setObjectName(QString::fromUtf8("radioButtonTarget"));
        radioButtonTarget->setGeometry(QRect(20, 50, 101, 17));
        MainWindow->setCentralWidget(centralWidget);
        menuBar = new QMenuBar(MainWindow);
        menuBar->setObjectName(QString::fromUtf8("menuBar"));
        menuBar->setGeometry(QRect(0, 0, 1000, 20));
        MainWindow->setMenuBar(menuBar);
        statusBar = new QStatusBar(MainWindow);
        statusBar->setObjectName(QString::fromUtf8("statusBar"));
        MainWindow->setStatusBar(statusBar);

        retranslateUi(MainWindow);

        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QCoreApplication::translate("MainWindow", "ScarySim", nullptr));
#if QT_CONFIG(tooltip)
        horizontalSliderYaw->setToolTip(QCoreApplication::translate("MainWindow", "Yaw", nullptr));
#endif // QT_CONFIG(tooltip)
#if QT_CONFIG(tooltip)
        verticalSliderPitch->setToolTip(QCoreApplication::translate("MainWindow", "Pitch", nullptr));
#endif // QT_CONFIG(tooltip)
        groupBoxSimple->setTitle(QCoreApplication::translate("MainWindow", "Simple steering", nullptr));
        label_2->setText(QCoreApplication::translate("MainWindow", "Th2", nullptr));
        label_3->setText(QCoreApplication::translate("MainWindow", "z", nullptr));
        label->setText(QCoreApplication::translate("MainWindow", "Th1", nullptr));
        groupBox_2->setTitle(QCoreApplication::translate("MainWindow", "Position", nullptr));
        label_4->setText(QCoreApplication::translate("MainWindow", "X", nullptr));
        label_5->setText(QCoreApplication::translate("MainWindow", "Y", nullptr));
        label_6->setText(QCoreApplication::translate("MainWindow", "Z", nullptr));
        labelZ->setText(QCoreApplication::translate("MainWindow", "X", nullptr));
        labelY->setText(QCoreApplication::translate("MainWindow", "X", nullptr));
        labelX->setText(QCoreApplication::translate("MainWindow", "X", nullptr));
        label_10->setText(QCoreApplication::translate("MainWindow", "\316\2301", nullptr));
        labelThZ->setText(QCoreApplication::translate("MainWindow", "X", nullptr));
        labelTh1->setText(QCoreApplication::translate("MainWindow", "X", nullptr));
        label_11->setText(QCoreApplication::translate("MainWindow", "\316\2302", nullptr));
        label_12->setText(QCoreApplication::translate("MainWindow", "Z", nullptr));
        labelTh2->setText(QCoreApplication::translate("MainWindow", "X", nullptr));
        groupBoxTarget->setTitle(QCoreApplication::translate("MainWindow", "Target", nullptr));
        lineEditTx->setText(QCoreApplication::translate("MainWindow", "1.0", nullptr));
        lineEditTy->setText(QCoreApplication::translate("MainWindow", "1.0", nullptr));
        commandLinkButtonGo->setText(QCoreApplication::translate("MainWindow", "GO", nullptr));
        label_9->setText(QCoreApplication::translate("MainWindow", "Y", nullptr));
        label_7->setText(QCoreApplication::translate("MainWindow", "Z", nullptr));
        label_8->setText(QCoreApplication::translate("MainWindow", "X", nullptr));
        lineEditTz->setText(QCoreApplication::translate("MainWindow", "0.0", nullptr));
        groupBox_3->setTitle(QCoreApplication::translate("MainWindow", "Mode", nullptr));
        radioButtonSimple->setText(QCoreApplication::translate("MainWindow", "Simple steering", nullptr));
        radioButtonTarget->setText(QCoreApplication::translate("MainWindow", "Target steering", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
