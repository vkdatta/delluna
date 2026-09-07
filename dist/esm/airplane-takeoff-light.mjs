export const name="airplane-takeoff-light";
export const id="dl_83665a19ecb349f5aadd";
export const url=new URL("../icons/airplane-takeoff-light.svg?v=afc83c9bbcd32135da956758f738a0e5e43a6ab4823968352a6c56c3277ca222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
