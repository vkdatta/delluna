export const name="timer_arrow_up-fill";
export const id="dl_91459393909e4d428d43";
export const url=new URL("../icons/timer_arrow_up-fill.svg?v=d074e422467d0a5110c4f8ee54c46f09770f7e0beb477825b31467228a6883cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
