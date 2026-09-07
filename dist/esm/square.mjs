export const name="square";
export const id="dl_6b6e0fc0fe30401a8b53";
export const url=new URL("../icons/S/square.svg?v=b576b2c78227d150d8d5dab88557b0f6236ad8530179ef671cdc118d5aa3c7bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
