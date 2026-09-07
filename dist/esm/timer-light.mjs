export const name="timer-light";
export const id="dl_280691f1e1a443a68b42";
export const url=new URL("../icons/T/timer-light.svg?v=91b9cba11ee931d7892ca284557ea1ef6f18ac2b9f950fc613c4026d2f1d93a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
