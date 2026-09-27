export const name="cpu-duotone";
export const id="dl_c687b5c7593c48e5a040";
export const url=new URL("../icons/cpu-duotone.svg?v=5c5188bc25b67b88048ec8f22ef4ee8b031279c4e6fe6a594f2c704a32a41463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
