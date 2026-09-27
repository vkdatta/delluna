export const name="shuffle-simple-fill";
export const id="dl_0e1fb5e3e17b2c33b978";
export const url=new URL("../icons/shuffle-simple-fill.svg?v=846f8644d64d6cc4b73f33a7052c6f01d0777e7d6391044354c6d2760d3a80cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
