class Triangle(object):
    number_of_sides =3
    def __init__(self,angle1, angle2,  angle3):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
        
    def check_angles(self,angle1, angle2,  angle3):
        if angle1+angle2+angle3 ==180:
            return True
        else:
            return False
            
class Equilateral(Triangle):
    angle = 60
    def __init__(self):
        self.angle1 = self.angle
        self.angle2= self.angle
        self.angle3 = self.angle

my_triangle = Triangle(90, 80, 10)
print my_triangle.number_of_sides
print my_triangle.check_angles(90, 80, 10)