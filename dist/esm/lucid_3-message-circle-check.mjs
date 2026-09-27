export const name="lucid_3-message-circle-check";
export const id="dl_e665fa9c10e843c8a8bd";
export const url=new URL("../icons/lucid_3-message-circle-check.svg?v=a862d2a0a54a3b549c88ec931b30f54d3cec31db98baf1ef1192ff54ed8043fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
