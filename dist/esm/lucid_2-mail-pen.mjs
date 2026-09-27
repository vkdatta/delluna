export const name="lucid_2-mail-pen";
export const id="dl_d39da81917df4c688eec";
export const url=new URL("../icons/lucid_2-mail-pen.svg?v=8bcbfe2b0617049af76784639c48f6c898a2a09bc7d1df0c7ab667f2db168019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
