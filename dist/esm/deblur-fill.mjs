export const name="deblur-fill";
export const id="dl_09af37c4a1d45f34313a";
export const url=new URL("../icons/deblur-fill.svg?v=6ead20ba3ecfa322104a92c4e3651cbe62db360a19e262c5e8d7581d1fd771fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
