export const name="lucid_3-square-arrow-down-left";
export const id="dl_d1c4614b7f2c4f699d77";
export const url=new URL("../icons/lucid_3-square-arrow-down-left.svg?v=56402ff9032ddccd241864e6726f58395a0dc18535fa9512d60588ec6d5a8e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
