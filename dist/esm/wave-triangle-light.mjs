export const name="wave-triangle-light";
export const id="dl_1ca9ebd72faca80e2509";
export const url=new URL("../icons/wave-triangle-light.svg?v=d278af7fc2f5feee4c429b2555fb8e0a28782994ec7091d1a00774352832979c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
