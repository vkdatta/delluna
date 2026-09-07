export const name="shower-fill";
export const id="dl_15fd3aeb7b5345ef96fc";
export const url=new URL("../icons/S/shower-fill.svg?v=37402603c01a1351639c669f72356475261f969018983d1055fc6328eacd625a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
