export const name="belt";
export const id="dl_0f7fd75af0c140bd87ca";
export const url=new URL("../icons/belt.svg?v=3f683233879ee3a39badd736e27a53b56e62eb5981c4b1769190ae33bb4f24f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
