export const name="lucid_3-move-down-right";
export const id="dl_817b1f6ccdce4a97a48e";
export const url=new URL("../icons/lucid_3-move-down-right.svg?v=a54d677f898c421064ae17cf6b3fa444c6fc4896d051438b0956429493c17e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
