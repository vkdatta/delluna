export const name="drop-half-bold";
export const id="dl_ee67f395d75e4342b6d7";
export const url=new URL("../icons/drop-half-bold.svg?v=782bf504ff54bd46ca29fa7f36451946d81c6c13689342fbf17ff2522a72f250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
