export const name="pin_end-fill";
export const id="dl_ef62bc2a8b43fca90ec1";
export const url=new URL("../icons/pin_end-fill.svg?v=1bfdcfff3e66a13151401c7307edf877c86783ca9688e60e6ab36d9708471d38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
