export const name="virtual-reality-bold";
export const id="dl_188d8753a24d852feb76";
export const url=new URL("../icons/virtual-reality-bold.svg?v=de6d559edc973ff63e7faca048006551c1bdf2b551294991b90ec98738d979c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
