export const name="label_off";
export const id="dl_5b418a84dd6845d4b57c";
export const url=new URL("../icons/L/label_off.svg?v=17ff9b1b2ad01fed66c6933e695ba177994a5270a93c7bbdc496232d9025ed1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
