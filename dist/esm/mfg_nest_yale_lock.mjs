export const name="mfg_nest_yale_lock";
export const id="dl_be3b76d8b0eccd73643b";
export const url=new URL("../icons/mfg_nest_yale_lock.svg?v=3778cd93e43643cba56c88c7b6c44d7f061cf2c15a5fcc64792816f5fa33e671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
