export const name="record-duotone";
export const id="dl_90e29d56a281442aa8e3";
export const url=new URL("../icons/record-duotone.svg?v=1d427e9511c62cdce35d6cf75d4664a99eb1b724063cc2894bca19d701e1c63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
