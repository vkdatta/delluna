export const name="cast_connected";
export const id="dl_3ba8a260a3f35c62bf67";
export const url=new URL("../icons/cast_connected.svg?v=547b4cd659f96cfc3b1440ef4a7fdd52298733ed0d9c57f4d58ed6f0d8b45f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
