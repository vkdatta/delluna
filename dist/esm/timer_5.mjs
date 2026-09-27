export const name="timer_5";
export const id="dl_9f36a3d06036fa442a06";
export const url=new URL("../icons/timer_5.svg?v=2372ce4812d7836524b2be037bd3c7dfacc1457ccde14cf4e983a973d1a78613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
