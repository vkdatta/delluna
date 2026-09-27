export const name="cloud_alert";
export const id="dl_a82a8dccd6b147599f75";
export const url=new URL("../icons/cloud_alert.svg?v=54a662f93aba378cbd706cec565ef5e801bd4d317c902ff54d4922355454a6eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
