export const name="work_alert";
export const id="dl_b8d6597cdaaeebaafd95";
export const url=new URL("../icons/work_alert.svg?v=f6df82953c7704e231305f1c4ac11079c6431d56a82b8a0177bcbfdbcdd5b039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
