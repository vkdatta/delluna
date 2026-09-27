export const name="nest_found_savings";
export const id="dl_903b34ff419d1fe62793";
export const url=new URL("../icons/nest_found_savings.svg?v=e80b4e9e4a5593c2bfc65a4eb507ce3901db7a80995d33dd39f1cb54e8311bcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
