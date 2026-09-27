export const name="flower-lotus-fill";
export const id="dl_f2cb797fc6b340958f0b";
export const url=new URL("../icons/flower-lotus-fill.svg?v=5a55420cf8da30f43f75a69418df2e404843b11bc468be744cf6ece643dffdec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
