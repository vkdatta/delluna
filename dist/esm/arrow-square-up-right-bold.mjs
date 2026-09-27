export const name="arrow-square-up-right-bold";
export const id="dl_83c3416951d54d2d80ea";
export const url=new URL("../icons/arrow-square-up-right-bold.svg?v=5902d8f60ac2eb9f7fe3110efeba3366053ce1e2866df5a53094da6855b5ff10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
