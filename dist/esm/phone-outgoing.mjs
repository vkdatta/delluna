export const name="phone-outgoing";
export const id="dl_a296aca4591545d0a2c4";
export const url=new URL("../icons/phone-outgoing.svg?v=03ad3f2c97ba77b9b0deee2bff259e8698ff24363d6fe99a1b0ac288c42dc200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
