function sysCall_init()
    -- do some initialization here
    jointr=sim.getObjectHandle('Rotate')
end

function sysCall_actuation()
    -- put your actuation code here
end

function sysCall_sensing()
    aa=(sim.getJointPosition(jointr)*180/math.pi)
    print(math.floor(aa))
end

function sysCall_cleanup()
    -- do some clean-up here
end

-- See the user manual or the available code snippets for additional callback functions and details
