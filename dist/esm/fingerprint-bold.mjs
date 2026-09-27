export const name="fingerprint-bold";
export const id="dl_30edb70b8b944e209f61";
export const url=new URL("../icons/fingerprint-bold.svg?v=fadf35e0cb6e4dcaa343cad741f5f8fabdb0d7e9340270193502d992625c427d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
