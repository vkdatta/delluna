export const name="sauna-fill";
export const id="dl_b107175222f94ffb8e50";
export const url=new URL("../icons/sauna-fill.svg?v=c6702385ff1ea85db1beaa2df335c858f08d8b9b0e39586a9cd544c0d91b8635",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
