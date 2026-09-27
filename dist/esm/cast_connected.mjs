export const name="cast_connected";
export const id="dl_8044a472454dbb693a04";
export const url=new URL("../icons/cast_connected.svg?v=6f0fe5e74fb884bd585155e79f3f3a9ed41fbbce2411ffb2a7f453f6441fb811",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
