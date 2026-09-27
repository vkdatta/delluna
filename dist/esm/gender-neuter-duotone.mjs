export const name="gender-neuter-duotone";
export const id="dl_dbfa48dde2ad4c29a3df";
export const url=new URL("../icons/gender-neuter-duotone.svg?v=384b49e1549b3f5d129727e24502e2b79621636a854780f044627a62ca0dd42f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
