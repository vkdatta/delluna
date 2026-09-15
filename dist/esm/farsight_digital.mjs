export const name="farsight_digital";
export const id="dl_c7411f0cf0f4469ab45d";
export const url=new URL("../icons/F/farsight_digital.svg?v=6796d4cb995dce6e89679e4f2665893b433eb3d0d3408efbca6be66d77ce7850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
