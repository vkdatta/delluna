export const name="magnifying-glass-duotone";
export const id="dl_f08be23b87a1478f8747";
export const url=new URL("../icons/magnifying-glass-duotone.svg?v=2717548b9c63917c31d85ed1aeb392dfac9d361438a51ab3612a6bc4f552fe27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
