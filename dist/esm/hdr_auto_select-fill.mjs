export const name="hdr_auto_select-fill";
export const id="dl_16a4a67405bc4e33a248";
export const url=new URL("../icons/hdr_auto_select-fill.svg?v=e5d3b14c246167c5f819420d9467f26102a9c0d423e80fbff416d490648da914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
