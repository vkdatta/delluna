export const name="flip-vertical-fill";
export const id="dl_c406a92f23ff457e998a";
export const url=new URL("../icons/flip-vertical-fill.svg?v=664f564990f58be73bec8e2ea4537108dcc78ee3b6d73fc3a55d1252996adc81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
