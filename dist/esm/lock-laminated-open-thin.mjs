export const name="lock-laminated-open-thin";
export const id="dl_14e3897953a04675a8ca";
export const url=new URL("../icons/lock-laminated-open-thin.svg?v=bc862e3f9f7528959efe12ae3e08c0edf1c92cf95a2b42d81339464ace41b525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
