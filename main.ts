let Distancia = 0
magicbit.MotorRun(magicbit.Motors.M1, 0)
magicbit.GeekServo(magicbit.Servos.S1, 50)
basic.forever(function () {
    Distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (Distancia <= 5 && Distancia > 0) {
        magicbit.MotorRun(magicbit.Motors.M1, 0)
        magicbit.GeekServo(magicbit.Servos.S1, 100)
        magicbit.MotorRun(magicbit.Motors.M1, -255)
        basic.pause(3000)
        magicbit.GeekServo(magicbit.Servos.S1, 50)
        magicbit.MotorRun(magicbit.Motors.M1, 0)
    } else {
        magicbit.MotorRun(magicbit.Motors.M1, 255)
    }
})
