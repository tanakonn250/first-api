'use strict';
import Knex = require('knex');

export class MembersModels {
//select * from user
listall(knex: Knex) {
    return knex('members');
}

listraw(knex: Knex) {
   let sql = 'select * from members';
   return knex.raw(sql); 
  }

  // search with condition = ค้นหาแบบีเงื่อนไข
  //select * from members where cid= ?
  wherecid(knex: Knex, cid: any) {
    return  knex('members')
    .where('cid',cid)


  }
//ลบข้อมูลเเบบมีเงื่อนไข
 delete(knex: Knex, cid: any) {
    return  knex('members')
    .where('cid',cid)
    .del()


  }
//อัพเดทข้อมูลเเบบมีเงื่อนไข
//ถ้าเปนคำสั่ง sql คือ update members set telephone = ? where cid = ?
  update(knex: Knex, cid: any, firstname: any ,lastname : any, telephone: any) {
    return  knex('members')
    .where('cid',cid)
    .update('firstname',firstname)
    .update('lastname',lastname)
    .update('telephone',telephone)
  }


  //เพิ่มข้อมูล
  addData(knex: Knex,Datas: any) {
    return knex('members')
   .insert(Datas)


  }
}