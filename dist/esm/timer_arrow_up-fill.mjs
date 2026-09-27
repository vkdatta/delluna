export const name="timer_arrow_up-fill";
export const id="dl_f2d951472712ba06d194";
export const url=new URL("../icons/timer_arrow_up-fill.svg?v=4551dbd2ef902d225b93df4232f0e445188be00f830fd18c7e6ee5aac6c75b84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
