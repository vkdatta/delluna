export const name="turn_slight_right-fill";
export const id="dl_1ee33e4dca86ca4b763b";
export const url=new URL("../icons/turn_slight_right-fill.svg?v=430e090533d096eff8dfa1f5dfa4723bbf391fbf99d870402685ef9b50f770fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
