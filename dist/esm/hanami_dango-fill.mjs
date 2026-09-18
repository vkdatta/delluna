export const name="hanami_dango-fill";
export const id="dl_9b3bc083ac1745eea7f4";
export const url=new URL("../icons/hanami_dango-fill.svg?v=2a36e25e45a27839ade0822a8ddb1ca62fbe7f8cb61f4b304828bc2a58f42160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
