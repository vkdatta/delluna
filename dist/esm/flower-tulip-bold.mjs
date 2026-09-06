export const name="flower-tulip-bold";
export const id="dl_674ff148b8b54a0da87b";
export const url=new URL("../icons/flower-tulip-bold.svg?v=abe6d46d57010592b6540adc9868c9e6b36669ddb8399e7f840794b2ae472a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
