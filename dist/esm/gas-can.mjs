export const name="gas-can";
export const id="dl_309d2f5c26cd4d2da0cd";
export const url=new URL("../icons/gas-can.svg?v=7c709c68d8be043e946142cafba9a5911efabf546c1eb1011fa4e44bef1302f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
