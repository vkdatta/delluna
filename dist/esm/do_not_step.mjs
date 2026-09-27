export const name="do_not_step";
export const id="dl_26883b52563b2c8aa9af";
export const url=new URL("../icons/do_not_step.svg?v=aa02438af900cc761c4ace58bbdf270b3210095556ce9aa6985cd890561f43b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
