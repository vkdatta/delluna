export const name="call_end-fill";
export const id="dl_869121325b5edcad3e01";
export const url=new URL("../icons/call_end-fill.svg?v=61d74521cbb1b7aebdbc2b3c091685dfafc16900d5a6f8ef4642cb4f970ebc5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
