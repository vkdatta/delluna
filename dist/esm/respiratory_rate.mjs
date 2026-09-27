export const name="respiratory_rate";
export const id="dl_88efe17969bcc960c882";
export const url=new URL("../icons/respiratory_rate.svg?v=6fdc20fca0957f0b9e12fff181b19872dfc0d29fc2cd5884d9f671b9ac0fb257",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
