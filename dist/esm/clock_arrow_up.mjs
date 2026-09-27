export const name="clock_arrow_up";
export const id="dl_fc38a71b66c4c202b726";
export const url=new URL("../icons/clock_arrow_up.svg?v=966a8cc87c71764f5e6adfcacf8acb4274102247d4fe2ee0193fb7ac6b0a41da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
