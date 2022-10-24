"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,v=m["".concat(l,".").concat(p)]||m[p]||h[p]||i;return n?o.createElement(v,a(a({ref:t},d),{},{components:n})):o.createElement(v,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={title:"KVM/Libvirt"},a=void 0,s={unversionedId:"staff/backend/libvirt",id:"staff/backend/libvirt",title:"KVM/Libvirt",description:"Most of the OCF's hosts are virtual machines. Our virtual machines are all",source:"@site/docs/staff/backend/libvirt.md",sourceDirName:"staff/backend",slug:"/staff/backend/libvirt",permalink:"/docs/staff/backend/libvirt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/backend/libvirt.md",tags:[],version:"current",frontMatter:{title:"KVM/Libvirt"},sidebar:"tutorialSidebar",previous:{title:"LDAP",permalink:"/docs/staff/backend/ldap"},next:{title:"Mail",permalink:"/docs/staff/backend/mail/"}},l={},u=[{value:"Administration",id:"administration",level:2},{value:"How do I view which VMs are on a hypervisor?",id:"how-do-i-view-which-vms-are-on-a-hypervisor",level:3},{value:"How do I turn on a VM?",id:"how-do-i-turn-on-a-vm",level:3},{value:"How do I turn off a VM?",id:"how-do-i-turn-off-a-vm",level:3},{value:"How do I make a VM automatically turn on when the hypervisor boots?",id:"how-do-i-make-a-vm-automatically-turn-on-when-the-hypervisor-boots",level:3},{value:"Is there a GUI for all of this?",id:"is-there-a-gui-for-all-of-this",level:3},{value:"If you just want to see a single VM&#39;s virtual monitor",id:"if-you-just-want-to-see-a-single-vms-virtual-monitor",level:4},{value:"How do I create a VM?",id:"how-do-i-create-a-vm",level:3},{value:"How do I delete a VM?",id:"how-do-i-delete-a-vm",level:3},{value:"How do I move a VM from one host to another?",id:"how-do-i-move-a-vm-from-one-host-to-another",level:3},{value:"Oh no, I&#39;ve got a VM with broken networking. How can I access it?",id:"oh-no-ive-got-a-vm-with-broken-networking-how-can-i-access-it",level:3},{value:"How do I edit my VM&#39;s RAM size or CPU count?",id:"how-do-i-edit-my-vms-ram-size-or-cpu-count",level:3},{value:"How do I edit my VM&#39;s disk size?",id:"how-do-i-edit-my-vms-disk-size",level:3}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Most of the OCF's hosts are virtual machines. Our virtual machines are all\npowered by ",(0,r.kt)("a",{parentName:"p",href:"https://www.qemu.org/"},"QEMU"),"/",(0,r.kt)("a",{parentName:"p",href:"https://www.linux-kvm.org/"},"KVM")," and managed by ",(0,r.kt)("a",{parentName:"p",href:"https://libvirt.org/"},"libvirt")," on the\nhypervisors."),(0,r.kt)("p",null,"VM disks are stored as LVM volumes on the hypervisors, typically under\n",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/vg/<vm-name>"),"."),(0,r.kt)("h2",{id:"administration"},"Administration"),(0,r.kt)("h3",{id:"how-do-i-view-which-vms-are-on-a-hypervisor"},"How do I view which VMs are on a hypervisor?"),(0,r.kt)("p",null,"SSH into the hypervisor, then run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo virsh list --all"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kpengboy@hal:~$ sudo virsh list --all\n Id    Name                           State\n----------------------------------------------------\n 1     fallingrocks                   running\n 3     limniceruption                 running\n 4     spriggs                        running\n 5     dev-flood                      running\n 11    dev-whiteout                   running\n 15    dev-death                      running\n 18    dev-tsunami                    running\n -     dev-anthrax                    shut off\n -     dev-pestilence                 shut off\n -     dev-werewolves                 shut off\n -     zombies                        shut off\n")),(0,r.kt)("h3",{id:"how-do-i-turn-on-a-vm"},"How do I turn on a VM?"),(0,r.kt)("p",null,"On the hypervisor, run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo virsh start <vm-name>"),"."),(0,r.kt)("h3",{id:"how-do-i-turn-off-a-vm"},"How do I turn off a VM?"),(0,r.kt)("p",null,"You can SSH into the VM and run the ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command, or you can run\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo virsh shutdown <vm-name>")," on the hypervisor which hosts it."),(0,r.kt)("p",null,"If it's a public-facing VM (e.g. tsunami), remember to give a positive amount\nof time to the shutdown command, so users have adequate warning."),(0,r.kt)("h3",{id:"how-do-i-make-a-vm-automatically-turn-on-when-the-hypervisor-boots"},"How do I make a VM automatically turn on when the hypervisor boots?"),(0,r.kt)("p",null,"On the hypervisor, run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo virsh autostart <vm-name>"),"."),(0,r.kt)("p",null,"You can list which VMs are set to autostart with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo virsh list --all --autostart"),"."),(0,r.kt)("p",null,"Firestorm is set to autostart because it must be running in order for any staff\nto log in (other than by using the root account). Other VMs are not set to\nautostart because if they start before LDAP and Kerberos are available, logins\nmay not necessarily work properly."),(0,r.kt)("h3",{id:"is-there-a-gui-for-all-of-this"},"Is there a GUI for all of this?"),(0,r.kt)("p",null,"You can run virt-manager on the hypervisors to graphically start and stop VMs,\nview their virtual monitors, and do many other similar things. To access\nvirt-manager, SSH into the hypervisor with X forwarding (",(0,r.kt)("inlineCode",{parentName:"p"},"-X"),") enabled. Then, on\nthe hypervisor, run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo XAUTHORITY=~/.Xauthority virt-manager"),"."),(0,r.kt)("h4",{id:"if-you-just-want-to-see-a-single-vms-virtual-monitor"},"If you just want to see a single VM's virtual monitor"),(0,r.kt)("p",null,"You can use the virt-viewer tool. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"virt-manager")," in the above command\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"virt-viewer <vm-name>"),"."),(0,r.kt)("p",null,"Alternatively, you can directly connect to the VM's VNC display. This procedure\ngives much better performance than X forwarding, especially outside of the OCF\nnetwork. To do this, first run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo virsh vncdisplay <vm-name>")," on the\nhypervisor, and record what it prints out. Then, from your local computer, run\n",(0,r.kt)("inlineCode",{parentName:"p"},"vncviewer -via <hypervisor> <output of virsh vncdisplay>"),". So for instance, if\n",(0,r.kt)("inlineCode",{parentName:"p"},"virsh vncdisplay")," printed out ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:10"),", and the hypervisor were jaws,\nthen you would run ",(0,r.kt)("inlineCode",{parentName:"p"},"vncviewer -via jaws 127.0.0.1:10")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:10"),")."),(0,r.kt)("h3",{id:"how-do-i-create-a-vm"},"How do I create a VM?"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/staff/procedures/new-host"},"Creating new hosts"),"."),(0,r.kt)("h3",{id:"how-do-i-delete-a-vm"},"How do I delete a VM?"),(0,r.kt)("p",null,"On the hypervisor:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Shutdown the VM."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo virsh undefine <vm-name>"),"."),(0,r.kt)("li",{parentName:"ol"},"Backup the VM's disk (e.g. by renaming the LVM volume to ",(0,r.kt)("inlineCode",{parentName:"li"},"vg/<vm-name>.old"),")\nor delete it. You may want to also dump the contents of the disk to a file,\ncompressing it, and placing that file in ",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/backups/live/misc/servers")," on\nthe server which contains backups (which is ",(0,r.kt)("inlineCode",{parentName:"li"},"hal")," at the time of this\nwriting). You may also want to save the VM's XML definition by running\n",(0,r.kt)("inlineCode",{parentName:"li"},"sudo virsh dumpxml [vm-name] > [vm-name].xml")," and placing it in the same\naforementioned directory.")),(0,r.kt)("h3",{id:"how-do-i-move-a-vm-from-one-host-to-another"},"How do I move a VM from one host to another?"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/staff/scripts/migrate-vm"},"migrate-vm")," script."),(0,r.kt)("h3",{id:"oh-no-ive-got-a-vm-with-broken-networking-how-can-i-access-it"},"Oh no, I've got a VM with broken networking. How can I access it?"),(0,r.kt)("p",null,"You can open virt-manager as described above, open the VM's display, and then\nlog in there."),(0,r.kt)("p",null,"Alternatively, if you don't want to bother with opening up a GUI, you can often\naccess the VM using its serial console. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo virsh console <vm-name>")," on\nthe hypervisor. This will connect you to the VM's TTY listening on its simulated\nserial port."),(0,r.kt)("p",null,"You may have to initially hit enter for the VM to (re-)print the login prompt.\nWhen you're done, make sure to log out. Then use Ctrl+] to exit the virsh\nconsole."),(0,r.kt)("p",null,"This method of accessing the VM only works when there is a getty process\nlistening on the serial port. All of our VMs start such a process automatically,\nbut only after boot has mostly finished. Therefore, the serial console probably\nwon't work if you're trying to diagnose boot problems."),(0,r.kt)("h3",{id:"how-do-i-edit-my-vms-ram-size-or-cpu-count"},"How do I edit my VM's RAM size or CPU count?"),(0,r.kt)("p",null,"On the hypervisor, run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo virsh edit <vm-name>")," to edit the VM's XML\ndefinition."),(0,r.kt)("p",null,"To query and modify virtual hardware state for your vm, use the following commands,\nfor RAM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"virsh dommemstat <vm-name> [[--config] [--live] | [--current]]\nvirsh setmaxmem <vm-name> <size> [[--config] [--live] | [--current]]\nvirsh memtune <vm-name> [...]\n")),(0,r.kt)("p",null,"and for vCPUs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"virsh vcpuinfo <vm-name> [...]\nvirsh vcpucount <vm-name>\nvirsh setvcpus <vm-name> <count> [...] [--guest] [--hotpluggable]\n")),(0,r.kt)("h3",{id:"how-do-i-edit-my-vms-disk-size"},"How do I edit my VM's disk size?"),(0,r.kt)("p",null,"Find the lvm vg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"virsh dumpxml <vm> | grep -C3 path\n")),(0,r.kt)("p",null,"On the hypervisor,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"virsh dominfo <vm>\nvirsh domblkinfo <vm>\nlvextend /dev/vg/<vm> -L20G\nvirsh blockresize <vm> /dev/vg/<vm> 20G\n")),(0,r.kt)("p",null,"On the vm,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fdisk /dev/vda        # if needed, very carefully\npartprobe /dev/vda1\nresize2fs /dev/vda1\n")),(0,r.kt)("p",null,"If you'd like to shrink a partition on-line, see ",(0,r.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/questions/226872/how-to-shrink-root-filesystem-without-booting-a-livecd#227318"},"Unix SE"),"."))}h.isMDXComponent=!0}}]);