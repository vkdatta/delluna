export const name="chat-circle-slash-duotone";
export const id="dl_2e682608078741d6867b";
export const url=new URL("../icons/chat-circle-slash-duotone.svg?v=447fe8e115196d5459a3974c5cd26069efcd5e9923a7dcfef09ff675670df60e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
