export const name="subway-duotone";
export const id="dl_3330837464fc93ee47c7";
export const url=new URL("../icons/subway-duotone.svg?v=7fe169834a2c1c5e894502dbbc5a82eda1cfe73fa161eb2d43be34cb80e45623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
