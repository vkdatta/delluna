export const name="file-arrow-up-duotone";
export const id="dl_8d11350c09304f549237";
export const url=new URL("../icons/file-arrow-up-duotone.svg?v=7c530ebc42f78805a709f83a5d236bf34329fc3a521669191c128ae4cf729356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
