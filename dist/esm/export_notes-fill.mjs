export const name="export_notes-fill";
export const id="dl_8297857fa5442ba712a0";
export const url=new URL("../icons/export_notes-fill.svg?v=3c956c76825ce7db142f249ab573defc1aab9c098903c387ef4b1abbc7d9b445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
