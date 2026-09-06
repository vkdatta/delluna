export const name="lucid_3-robot-vacuum";
export const id="dl_487e5787d3394740b289";
export const url=new URL("../icons/lucid_3-robot-vacuum.svg?v=5610e9e6d5dc5c4cb1e25d0467495bdb311ac7b518d7fa8448027a666463d4c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
