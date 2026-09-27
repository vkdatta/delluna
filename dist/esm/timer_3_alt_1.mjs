export const name="timer_3_alt_1";
export const id="dl_eae4e3ba7e41e21e961f";
export const url=new URL("../icons/timer_3_alt_1.svg?v=fbb8739d8f69f232fe4582c94705056714bd8fe16847f7556d0f81262aaa2fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
