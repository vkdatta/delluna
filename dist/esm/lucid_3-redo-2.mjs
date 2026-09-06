export const name="lucid_3-redo-2";
export const id="dl_c6c687fde0a448bbb481";
export const url=new URL("../icons/lucid_3-redo-2.svg?v=1b40fe0f538a24b98e24a32ab5bcd74114b16f790cb0b43717bbe124bec17b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
