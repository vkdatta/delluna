export const name="family_link";
export const id="dl_69734376b5153a162e12";
export const url=new URL("../icons/family_link.svg?v=f05221b687bd1c7d966d86f043aa34faa4cfa9efa4c2ca60bc919f836d107cae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
