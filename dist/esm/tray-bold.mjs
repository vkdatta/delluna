export const name="tray-bold";
export const id="dl_131a2e7951bee8110c3e";
export const url=new URL("../icons/tray-bold.svg?v=adcee1c337b260120426ef9dea6427314a7c2154b4ad835eeb9f3a1de9be03fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
