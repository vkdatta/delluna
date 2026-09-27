export const name="wrong_location-fill";
export const id="dl_70a776c494d2ed4cf37a";
export const url=new URL("../icons/wrong_location-fill.svg?v=e7ef415156d2fb98e4fa84baaed2a6d504464e9f8b32a10de3747748fe70c3a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
