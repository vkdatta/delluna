export const name="arrow-down-duotone";
export const id="dl_a97341655fa94f819f1d";
export const url=new URL("../icons/arrow-down-duotone.svg?v=2b1b74a1fe6c09018f82066ed43f889fcd9ca90d46f06d422fe6758afa952fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
