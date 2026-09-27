export const name="radio-button-thin";
export const id="dl_e1b90fdde7f044e6800d";
export const url=new URL("../icons/radio-button-thin.svg?v=3e338dda192ce81eeb95ed275005be30d4c820926a1f2069ce940b3958a22a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
