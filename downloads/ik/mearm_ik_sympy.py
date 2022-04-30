import sympy as sp
 
# Define symbols
theta, ltheta, utheta, r, x, y, z = sp.symbols("theta ltheta utheta r x y z")
 
# Define equations, rearranged so expressions equal 0
eq1 = 15 + 50 + 80*sp.sin(ltheta) + 80*sp.sin(utheta) - r
eq2 = 53 + 80*sp.cos(ltheta) - 80*sp.cos(utheta) - z
# 從 eq3 與 eq4 可以得到 eq5 與 eq6, 將 r 及 theta 表示成 x, y 輸入的函式
# 因此 r 與 theta 在得知 x, y, z 時就可視為已知
eq3 = r*sp.cos(theta) - x
eq4 = r*sp.sin(theta) - y
eq5 = sp.sqrt(x*x + y*y) - r
eq6 = sp.atan(y/x) - theta
 
# Solve for theta1 & theta3
solution = sp.solve([eq1, eq2], [ltheta, utheta], dict=True)
print(solution)
 
'''
[{ltheta: pi - asin(r/80 + sin(2*atan((-160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) + 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))) - 13/16), 
 
utheta: -2*atan((-160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) + 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))}, 
 
{ltheta: asin(-r/80 + sin(2*atan((160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) - 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))) + 13/16) + pi, 
 
utheta: 2*atan((160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) - 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))}, 
 
{ltheta: -asin(-r/80 + sin(2*atan((160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) - 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))) + 13/16), 
 
utheta: 2*atan((160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) - 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))}, 
 
{ltheta: asin(r/80 + sin(2*atan((-160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) + 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))) - 13/16), 
 
utheta: -2*atan((-160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) + 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))}]
'''