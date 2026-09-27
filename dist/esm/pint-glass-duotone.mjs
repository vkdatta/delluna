export const name="pint-glass-duotone";
export const id="dl_79cdb4ca31df4de095a4";
export const url=new URL("../icons/pint-glass-duotone.svg?v=38a15989c39ea7d1438ba065d4226375e9a597649540fe22017081d4f217a887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
