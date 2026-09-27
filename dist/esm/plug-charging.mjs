export const name="plug-charging";
export const id="dl_f0f1ace1c6f04080971a";
export const url=new URL("../icons/plug-charging.svg?v=8ad1d07f59f56623e9885fbc79c1da1014b3ca4b207bd8007abdd3ebe63aa348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
