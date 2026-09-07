export const name="text-h-five";
export const id="dl_1ad9b511ca9a44b9a081";
export const url=new URL("../icons/T/text-h-five.svg?v=1707285706d1a7dda6dd2e3a81651b39244b8d844e858d0a0a9081f30c497165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
