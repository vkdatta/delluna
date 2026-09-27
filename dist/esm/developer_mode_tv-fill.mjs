export const name="developer_mode_tv-fill";
export const id="dl_1ed5eb39314dd81a4533";
export const url=new URL("../icons/developer_mode_tv-fill.svg?v=37592d96df080ef80186617976229ea608c1643d0eb55c802243456c2a9f6505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
