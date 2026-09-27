export const name="compass-duotone";
export const id="dl_d110075939f24b5e9775";
export const url=new URL("../icons/compass-duotone.svg?v=4d82f1ae2a995c2e9271f312480dfa656bc9ac09dc495ff7abc1a33a5a3e7e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
