export const name="tamper_detection_off";
export const id="dl_01b2a526b23cd8240691";
export const url=new URL("../icons/tamper_detection_off.svg?v=d1f8d2b2acd741d344302b933b4142d0159f75850b928eead031a2491bde3de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
