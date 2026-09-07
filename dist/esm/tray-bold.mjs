export const name="tray-bold";
export const id="dl_0694d67df4b24ed6bbdd";
export const url=new URL("../icons/T/tray-bold.svg?v=614b4a9cce26501a6a12500dc8f68299cb738061f75b316b910544ebfa5093f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
