export const name="axe-bold";
export const id="dl_1912aecc778c4241bdc4";
export const url=new URL("../icons/axe-bold.svg?v=70993a38eca1111ba022031ebab50e1011ecd67ee22a6734ed7f973a84defc12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
