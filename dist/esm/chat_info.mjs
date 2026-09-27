export const name="chat_info";
export const id="dl_a013154bc876e438828c";
export const url=new URL("../icons/chat_info.svg?v=8747d82536e4351f8fcf7c339e632bed7d8a8a47ef47242f78bcfd37682c8db7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
