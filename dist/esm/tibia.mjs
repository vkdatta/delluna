export const name="tibia";
export const id="dl_6384ecd3843f4f3380d1";
export const url=new URL("../icons/T/tibia.svg?v=496b95a6820b08f785eab69913fa978c91d99983feb0590645bc40771acefd11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
