export const name="add_to_queue";
export const id="dl_67eda93f516323f1a6cb";
export const url=new URL("../icons/add_to_queue.svg?v=6a9d27f8e4eaab1de590c1e7bdcbec8d8dbe23f0f9323dd5f0750d00937201a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
