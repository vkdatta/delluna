export const name="device-tablet";
export const id="dl_bdd2f2e94244401484d0";
export const url=new URL("../icons/device-tablet.svg?v=c479d30b6d0b782120ecd9ce395632750caa5ac16a75cfdac27d4d88bc768be9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
