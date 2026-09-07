export const name="chat-circle-slash-duotone";
export const id="dl_2e682608078741d6867b";
export const url=new URL("../icons/chat-circle-slash-duotone.svg?v=78e0923dc15a445753b19b23425966de486b1199477d29c4ba3e56b03de8ae5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
