# Calculator which calculate the roots of equation
import math
a=2
b=4
c=-6
def calRoot1 (a,b,c):
    y=b*b-4*a*c
    x=math.sqrt(y)
    x1=-b+x
    x2=2*a
    x3=x1/x2
    return x3
print("The roots of equation are :")
print(calRoot1 (a,b,c))
def calRoot2 (a,b,c):
    y=b*b-4*a*c
    x=math.sqrt(y)
    x1=-b-x
    x2=2*a
    x3=x1/x2
    return x3
print(calRoot2 (a,b,c))
