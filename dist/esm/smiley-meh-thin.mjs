export const name="smiley-meh-thin";
export const id="dl_a7d6466b82f3c0c04bd7";
export const url=new URL("../icons/smiley-meh-thin.svg?v=c3e25665578e9fcb4edbc943990d393fb0efaf622ed16c44ff66f8512db654e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
