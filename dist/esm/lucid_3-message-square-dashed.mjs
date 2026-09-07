export const name="lucid_3-message-square-dashed";
export const id="dl_5e297379eb504086a722";
export const url=new URL("../icons/lucid_3-message-square-dashed.svg?v=a5e6336b01f0394be38a19b74e4c0a1dd4713b8d783f67aae4a80f311729c8d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
