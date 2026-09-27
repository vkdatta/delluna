export const name="1k";
export const id="dl_182f70d7a79783ae604e";
export const url=new URL("../icons/1k.svg?v=197d82baeb54bd38184f7990a6c089e45d454d4a2538f601971934caab4bd976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
