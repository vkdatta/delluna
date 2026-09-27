export const name="lucid_3-message-circle-dashed";
export const id="dl_b1f3534bddc242a8a7b3";
export const url=new URL("../icons/lucid_3-message-circle-dashed.svg?v=dbc56d99982f59e09ad917993b41307fc2ba49ff0f80de0bf6669e21c52021e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
