export const name="move_vertical";
export const id="dl_d887f672bc3e4c767fd8";
export const url=new URL("../icons/move_vertical.svg?v=53322b5c58026734d8883f9de470b58a6052353beb3fb30ae1ef979398627e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
