export const name="paperclip-horizontal-duotone";
export const id="dl_af95cfc548d34bebb0d3";
export const url=new URL("../icons/paperclip-horizontal-duotone.svg?v=9d788ab97ee6716bd3ef4079bafaf5485e0e64cde1bd84f8cd214c27706e6231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
