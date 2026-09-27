export const name="door_back";
export const id="dl_4a8f66a20f299cbd5cdb";
export const url=new URL("../icons/door_back.svg?v=889236b94a4f1afa712434366e5752fb5f6560f4e92c38ff939886ce0f2dbea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
