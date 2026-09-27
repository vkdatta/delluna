export const name="add_alert";
export const id="dl_dd1de67877a510bbcf60";
export const url=new URL("../icons/add_alert.svg?v=9e30da625a6b0f2069194fe2fe8256f8ac4effc8235c76211d20362ed8572509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
