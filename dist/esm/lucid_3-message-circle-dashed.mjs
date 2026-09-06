export const name="lucid_3-message-circle-dashed";
export const id="dl_b1f3534bddc242a8a7b3";
export const url=new URL("../icons/lucid_3-message-circle-dashed.svg?v=3d103d9fd69e734fa4eed6ce6130c3dd0235fa768bc4915c0f5992e4bb93a749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
