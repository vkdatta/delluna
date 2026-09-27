export const name="subtitles-duotone";
export const id="dl_cc47c25c85b609afe37f";
export const url=new URL("../icons/subtitles-duotone.svg?v=c493bf7a704c516b4fca590bf9b4570539c3858c9a250e682118cde04ad9918b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
