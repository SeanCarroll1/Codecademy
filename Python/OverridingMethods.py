class Car(object):
    condition = "new"
    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg   = mpg
    def display_car(self):
        print "This is a %s %s with %s MPG." % (self.color, self.model, str(self.mpg))
        
 
class ElectricCar(Car):
    def __init__(self, model, color, mpg, battery_type):
        self.model = model
        self.color = color
        self.mpg = mpg
        self.battery_type = battery_type
    def drive_car(self):
        self.condition = 'like new'   
         
    
my_car = ElectricCar("some", "any", 777, "molten salt")
my_car.display_car()
print my_car.condition
my_car.drive_car()
print my_car.condition