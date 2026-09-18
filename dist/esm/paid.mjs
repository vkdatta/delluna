export const name="paid";
export const id="dl_ec570a1ea78c4bda8f96";
export const url=new URL("../icons/P/paid.svg?v=650c9440ec55c120abb10b5118fd3aa86094fcb3a979dc89ff9374235e86a443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
