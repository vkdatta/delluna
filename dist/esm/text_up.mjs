export const name="text_up";
export const id="dl_aadf5f28d788521afcb9";
export const url=new URL("../icons/text_up.svg?v=d41c2364b3ddc41802ccb89a88967a61981ac9c6ea5cdd9be8f0c0d15deabafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
