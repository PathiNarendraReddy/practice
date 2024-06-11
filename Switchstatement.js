const mark=85;
            let branch;
            switch(true){
                case mark>=95:
                    branch="mpcs";
                    break;
                 case mark>=85:
                   branch="mpc";
                   break;
                   case mark>=75:
                    branch="mecs";
                    break;
                    case mark>=65:
                    branch="Bipc";
                    break;
                    default:
                        branch="no admistion";
            }
            document.write("branch"+branch);
