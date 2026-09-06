export const name="timer";
export const id="dl_85bf35fa22f24b30a410";
export const url=new URL("../icons/timer.svg?v=1714afcd9a2cc020f3bcc8bfec190c56df7fda259b6acd38586535022e64e505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
