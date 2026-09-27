export const name="ev_shadow";
export const id="dl_4f28e33d64265f2f6eb4";
export const url=new URL("../icons/ev_shadow.svg?v=c141bf6d6b41af94c14f638e73a99fb406fdf802e9df6712875ef28ff8e86613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
