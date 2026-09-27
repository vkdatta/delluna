export const name="upload-light";
export const id="dl_fed9eed0e58d3fb3ff8f";
export const url=new URL("../icons/upload-light.svg?v=7f2913650090f74cc594a8e5b17bb37139cc36361d954dfa7e5954a040c2b290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
