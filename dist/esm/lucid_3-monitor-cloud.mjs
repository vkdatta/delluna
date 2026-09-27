export const name="lucid_3-monitor-cloud";
export const id="dl_d98e00a343c4418bb11d";
export const url=new URL("../icons/lucid_3-monitor-cloud.svg?v=8b4dd21f86f7802fe3f777de877bff0db16b7f328b4c197604569fb518114b40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
