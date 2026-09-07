export const name="bell-fill";
export const id="dl_1134ccaca2704c51ba27";
export const url=new URL("../icons/bell-fill.svg?v=26437565edc7418a2c326a74078fb4519aa2316e84fcf1adefbdd1b2c89f4ac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
