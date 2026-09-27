export const name="psychiatry-fill";
export const id="dl_4792d3b62abe49fcb224";
export const url=new URL("../icons/psychiatry-fill.svg?v=aa80bb4220e789288b00bdf71517f983d5c26472b3468bf80b861f99e433322a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
