export const name="event_busy-fill";
export const id="dl_1b3f786e8841500c29f1";
export const url=new URL("../icons/event_busy-fill.svg?v=ae1e5772e7a41424598b5223b1476a1e3aaa2a8c9e37ff4acbd34587c39f51c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
