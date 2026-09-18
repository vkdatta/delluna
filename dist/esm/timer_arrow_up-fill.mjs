export const name="timer_arrow_up-fill";
export const id="dl_91aaa2acd1f048749057";
export const url=new URL("../icons/timer_arrow_up-fill.svg?v=23a9354362bec11cf67995f1a7839e7c692afe894589a95e651a32e29842384e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
