export const name="timer_3_alt_1";
export const id="dl_25dc2a8e5fe941049653";
export const url=new URL("../icons/T/timer_3_alt_1.svg?v=fbb8739d8f69f232fe4582c94705056714bd8fe16847f7556d0f81262aaa2fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
