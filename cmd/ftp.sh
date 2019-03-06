# usr =admin
# pss =bulk2010
# host = tmsmusic.tokyo

lftp -u admin,bulk2010 tmsmusic.tokyo \
-e "cd /home/admin/exp/biz/plan/public/img
lcd /mnt/sdb3/exp/chr/pup/
mirror -R img

exit
"
