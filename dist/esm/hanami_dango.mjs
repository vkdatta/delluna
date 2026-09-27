export const name="hanami_dango";
export const id="dl_443808b66d2847a45689";
export const url=new URL("../icons/hanami_dango.svg?v=1139a2f1d6a049a6ef7b82ae87a88c8cdd4684f88cc0ac4f7ea0c7b283f0aa75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
