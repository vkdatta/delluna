export const name="ping-pong";
export const id="dl_92e3b40c129844008197";
export const url=new URL("../icons/ping-pong.svg?v=b26a596178721115f13a12643599811cf6e76680fe276c8380f7ff7ea802ea17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
