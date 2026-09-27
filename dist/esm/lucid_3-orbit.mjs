export const name="lucid_3-orbit";
export const id="dl_f72e650b9c5f42169858";
export const url=new URL("../icons/lucid_3-orbit.svg?v=7ee4767d6762a15eae71b62f801b63f9312febf0fc4922034e6f04af3dc93f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
