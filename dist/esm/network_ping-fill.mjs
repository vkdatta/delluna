export const name="network_ping-fill";
export const id="dl_4bd4fb552b7b6dcf1eed";
export const url=new URL("../icons/network_ping-fill.svg?v=bb4f3ee8b4715ee70715b4fb4fc2113ef02143ec1b2b9a58306fb74684b350bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
