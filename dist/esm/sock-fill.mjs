export const name="sock-fill";
export const id="dl_872841456563480ea9af";
export const url=new URL("../icons/S/sock-fill.svg?v=a656abf384b2daa357917c2695037d16dc0800f20fac27c6301f61f2bcb62ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
