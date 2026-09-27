export const name="error-fill";
export const id="dl_2abdb8eeb63035c8a22d";
export const url=new URL("../icons/error-fill.svg?v=b36f47c5c346ffc2fc88c5094193cf317d0cd435d242de0a41dd505d1d2f33e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
