export const name="lucid_2-folder-open";
export const id="dl_fdf9e76875f74e1b83a2";
export const url=new URL("../icons/lucid_2-folder-open.svg?v=262515ffe1393f85b8a78b081b2fa9654096674f3764b3bb0783ec7805427ff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
