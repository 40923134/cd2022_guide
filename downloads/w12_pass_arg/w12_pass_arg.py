import sys
import NXOpen
import NXOpen.UF

'''
So in NX 12 (and I guess later releases) sys.argv[0] is the filename and sys.argv[1] is the argument string, and in earlier versions sys.argv[0] is the argument string. 
'''

def main(arg):
    """Takes a string argument, and shows it in a message box."""
    uf_session = NXOpen.UF.UFSession.GetUFSession()
    message = "The following arguments were passed to my journal:" + arg
    uf_session.Ui.DisplayMessage(message, 1)
if __name__ == '__main__':

    main(sys.argv[0]) 