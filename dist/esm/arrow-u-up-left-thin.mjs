export const name="arrow-u-up-left-thin";
export const id="dl_60f871b0ab7f40ceadfe";
export const url=new URL("../icons/arrow-u-up-left-thin.svg?v=4e65bde439fba625beda0f9173f9005daa5ff01f617b92a97376e741d4add631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
