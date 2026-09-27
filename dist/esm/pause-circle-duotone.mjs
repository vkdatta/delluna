export const name="pause-circle-duotone";
export const id="dl_6724071b1561428c8d61";
export const url=new URL("../icons/pause-circle-duotone.svg?v=702fc4420ab0e1e565e16b6a35e9a567562b88b4a8a7dff460e3a6bf3ecc5473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
