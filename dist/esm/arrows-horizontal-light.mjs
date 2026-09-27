export const name="arrows-horizontal-light";
export const id="dl_035564bcbd354615a8ba";
export const url=new URL("../icons/arrows-horizontal-light.svg?v=aecb10dc7939c68fa59925490606f7f5c0df7d6e3648ba3041281a48eb1360e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
