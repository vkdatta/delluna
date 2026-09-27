export const name="auto_delete-fill";
export const id="dl_a22fa2cb2bface2aa500";
export const url=new URL("../icons/auto_delete-fill.svg?v=a55924f3c372692fe8413a9c5acb42778015a2e92e25b574e6f6277f4bf8bf17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
