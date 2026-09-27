export const name="lucid_2-keyboard-off";
export const id="dl_023e218b04a84cd38f16";
export const url=new URL("../icons/lucid_2-keyboard-off.svg?v=0ceb376b38b0a70c58dfc8217e6c30719148a4e063ed353bb05f77800ebf1d35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
