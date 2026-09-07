export const name="lucid_1-circle-slash-2";
export const id="dl_9edf2df2a2b845628538";
export const url=new URL("../icons/lucid_1-circle-slash-2.svg?v=50e1ec82a3b7327d5876398198fa931dde0e837bd8cbb4477e331be92bfdfcdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
