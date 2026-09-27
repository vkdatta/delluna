export const name="family_history-fill";
export const id="dl_d1b0df93f08e7b53bd58";
export const url=new URL("../icons/family_history-fill.svg?v=59ea6af86da071bd79bd9881738ee2166672147dddf30f2dda4e45f092bb29be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
