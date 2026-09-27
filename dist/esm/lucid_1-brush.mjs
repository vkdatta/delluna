export const name="lucid_1-brush";
export const id="dl_b9f79d7064d3489ba9a4";
export const url=new URL("../icons/lucid_1-brush.svg?v=3118429abcd6b1045dca7db458835e538b6a62fef65b07ac2d658b279e723e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
