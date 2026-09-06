export const name="lucid_2-file-spreadsheet";
export const id="dl_e6d1d57fff6140718fcb";
export const url=new URL("../icons/lucid_2-file-spreadsheet.svg?v=897d7e84feaadb88db8a74267232bfd69aeff29c7e0588a637fb8d814327bfc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
