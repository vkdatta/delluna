export const name="cable_car";
export const id="dl_d12306d9c3c15630669d";
export const url=new URL("../icons/cable_car.svg?v=b4157400883eb1364910937777d2f20c5033820733628096b6fb24aaf4760b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
