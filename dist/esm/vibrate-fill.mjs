export const name="vibrate-fill";
export const id="dl_b10608a442eb18401b86";
export const url=new URL("../icons/vibrate-fill.svg?v=cd742f5d9c2db1c5a63cff7a4a0a0aef51e8f1c3315854ab5081d70f18ca3f60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
