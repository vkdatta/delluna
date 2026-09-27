export const name="uppercase";
export const id="dl_e6709b38f36451af6b79";
export const url=new URL("../icons/uppercase.svg?v=26ee501acda699ec48d3547da65e3e04b71fac71b5ccd80a7d70a549fe57250a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
