export const name="mic_off";
export const id="dl_33327f23816946e05cf7";
export const url=new URL("../icons/mic_off.svg?v=9e4826392591a8fda5c350a1ec83e7e181e644d2260f3eb8c9960114907614d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
