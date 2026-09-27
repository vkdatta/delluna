export const name="3d_2";
export const id="dl_b2c32e989c5f665f97cf";
export const url=new URL("../icons/3d_2.svg?v=9e3db78987b6d6aa5af9073b83fe25015e4435d0801010330943ef0764ece02f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
