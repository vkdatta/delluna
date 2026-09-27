export const name="hourglass_disabled-fill";
export const id="dl_ace86b6f3808033b4704";
export const url=new URL("../icons/hourglass_disabled-fill.svg?v=83e3181070dedf6c082c62c7890a6e0b6238463681a7fb4454fd2abb4f7ff03b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
