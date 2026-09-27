export const name="rewind-circle";
export const id="dl_04e5f7338f0b482fa58e";
export const url=new URL("../icons/rewind-circle.svg?v=274701e3f3fb83c89509f2eafc438329bad6e939c2236cf995745d87bb8401f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
