export const name="radio-bold";
export const id="dl_891b34656499458ab628";
export const url=new URL("../icons/radio-bold.svg?v=8603b9d8eb851a0b84938517e3127e9a660975ddff6e6245821946ebedfb1ae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
