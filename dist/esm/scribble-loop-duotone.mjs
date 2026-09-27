export const name="scribble-loop-duotone";
export const id="dl_1ce27cd59f367deaaf35";
export const url=new URL("../icons/scribble-loop-duotone.svg?v=508335db827715c493db174a5246265d74d7620523601abdc77e4edbf6473a08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
