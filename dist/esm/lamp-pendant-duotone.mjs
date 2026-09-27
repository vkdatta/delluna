export const name="lamp-pendant-duotone";
export const id="dl_d6eb34cfca1241b7ab10";
export const url=new URL("../icons/lamp-pendant-duotone.svg?v=cb933ef7d14acbde5912a8145e5cd9ca94b0ed7b230f391e57b4940703196ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
