export const name="screencast-fill";
export const id="dl_98e46b7d9a6d0c3278ae";
export const url=new URL("../icons/screencast-fill.svg?v=22856076a47c75d7dfaca5d0f8b547357660e51be61f62f707d591216a2b7df0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
