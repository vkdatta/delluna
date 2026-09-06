export const name="file-plus";
export const id="dl_80a08da9370f4998bbe5";
export const url=new URL("../icons/file-plus.svg?v=3b8413ff4a86a81cc9b32b2fa49c7088eaf40637637b7c18dc35c08b880eb56a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
