export const name="ar_on_you-fill";
export const id="dl_3a6900659aa14ad2a9e8";
export const url=new URL("../icons/A/ar_on_you-fill.svg?v=783e8118a7f9992c7956875aa30f63efc423fe255a804c5d3ac8f397209cd6fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
