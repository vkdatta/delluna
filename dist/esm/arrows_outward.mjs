export const name="arrows_outward";
export const id="dl_feef68f40e62561444da";
export const url=new URL("../icons/arrows_outward.svg?v=41c2c57dba4fb6eb3206c488c87a2291079124417dc2e997f7711e7f74e93d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
