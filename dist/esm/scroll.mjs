export const name="scroll";
export const id="dl_cac5ceafba92443aa535";
export const url=new URL("../icons/S/scroll.svg?v=e8e1f6aa3ca71259fe81b9bb9d6b697c69cd614b2126fabcdbc21390857a2ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
