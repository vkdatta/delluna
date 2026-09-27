export const name="lucid_2-file-plus-corner";
export const id="dl_59a1d3ff2e3047b39869";
export const url=new URL("../icons/lucid_2-file-plus-corner.svg?v=7e6c3928d963571fe18f6b8e0fe9c02313f6dd8f88bb204fd5387a192a5254e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
