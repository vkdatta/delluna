export const name="caret-line-left-fill";
export const id="dl_c758d2e4ce7949fcba2f";
export const url=new URL("../icons/caret-line-left-fill.svg?v=81f6e89b88ceeb2f34ac3a74097e32a6011f84718720d30be34b008d23b79039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
