export const name="wifi-off";
export const id="dl_12da83f3c3df4d69ae2e";
export const url=new URL("../icons/wifi-off.svg?v=aebcc628b8e9a3ffc3564d5158ed076339a5334bd881a976052427871d49723e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
