export const name="kayaking-fill";
export const id="dl_77bd08507aeb05d1082b";
export const url=new URL("../icons/kayaking-fill.svg?v=72c8a65f70ddb6cecd524b08d7cf48b74087473459b9abffbd5fa4cd1d2a5fe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
