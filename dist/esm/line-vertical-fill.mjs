export const name="line-vertical-fill";
export const id="dl_2e4bded8a2b74c7bb54c";
export const url=new URL("../icons/line-vertical-fill.svg?v=017a6c4775d9ac87be3849abaa5ee6bb735691c9fb4881b9393fb0fe7786d203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
