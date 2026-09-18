export const name="5k";
export const id="dl_b36a66535ced4f63be04";
export const url=new URL("../icons/5k.svg?v=214762d13791f03280d0f2ff5d8dc91c3eb3bca5f2ae2a77bae46955a10c4d53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
