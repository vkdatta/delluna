export const name="mic_external_off";
export const id="dl_89110f5a838a5e73b7b9";
export const url=new URL("../icons/mic_external_off.svg?v=7534ad5cbadb1ffda797b28a19a91b1dafb438098b62d8bb382b019cb4b917fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
