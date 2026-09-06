export const name="lucid_1-circle-arrow-left";
export const id="dl_00143c3919804586b1a4";
export const url=new URL("../icons/lucid_1-circle-arrow-left.svg?v=5266f8f7c5101a5f27e9949b891cd3f4a4e035ba859cccdc2e4d345db69d862e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
