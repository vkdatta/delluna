export const name="drive_export";
export const id="dl_ef5a8334fa091c65d9d4";
export const url=new URL("../icons/drive_export.svg?v=431e45c17315f63433c51430984eccd06224a7de4402941cee5a542c3cd44b30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
