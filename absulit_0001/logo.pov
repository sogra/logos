//   
//

//Output_File_Name=hdri_cube_6000x6000.jpg +w6000 +h6000 +fj +a
#version 3.7;

#include "all.inc" 
#include "rad_def.inc"
 

global_settings{
    assumed_gamma 3.0 
    radiosity {
          Rad_Settings(3, on, on)
    }    
     
    //photonGlobal("logo1.photon", true)      
    
}   

//#default {finish{ambient 0}}

lightSource



object{skyObj(pigment{SkyBlue},T_Cloud1) }  
darkSky()    

 #declare textures = array[2]
 #declare textures[0] = texture1
 #declare textures[1] = texture2
plainSky(texture1,textures, 20000)  




fogObject(-1,15,400,White)


plain(-1,.3,0,texture1)  

cam(
    <0.0, 0.0, -6.0>, 
    <1.5, 0.4,  0.0>, 
    0 ,35,y
)   

object{
    textfield("SOGRA", "Verdana", 1, 0) 
    texture{
        texture1
    }
    translate <0,0.1,0>
}

       








                             
                             
                             

