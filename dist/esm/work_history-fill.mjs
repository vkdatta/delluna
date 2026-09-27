export const name="work_history-fill";
export const id="dl_65b7c8a0047d0774e4f0";
export const url=new URL("../icons/work_history-fill.svg?v=3792cd356091c69f09efa8a4dafea5e9df430a27a05f97ee5bea3305b5fbf927",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
