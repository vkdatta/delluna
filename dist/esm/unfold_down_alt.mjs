export const name="unfold_down_alt";
export const id="dl_dfbad1934f351129892b";
export const url=new URL("../icons/unfold_down_alt.svg?v=a7b672d64d30a27ded466ee2570e3f78170bac60d8fbdef437b6e9a5879e7a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
