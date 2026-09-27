export const name="history_edu-fill";
export const id="dl_717793105417859ddfbc";
export const url=new URL("../icons/history_edu-fill.svg?v=a7cb4ef811a94088373b18a29fbb338795fba70b978f50b3b98625e1af7d2111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
