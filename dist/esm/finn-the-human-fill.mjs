export const name="finn-the-human-fill";
export const id="dl_8f15478f866d421c9bfa";
export const url=new URL("../icons/finn-the-human-fill.svg?v=5b97b560f7d0cd8d9b0c91bf2ffd6b64888717ab7df48906e2a1ff96d5768f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
