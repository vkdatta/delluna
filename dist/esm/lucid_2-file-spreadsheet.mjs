export const name="lucid_2-file-spreadsheet";
export const id="dl_e6d1d57fff6140718fcb";
export const url=new URL("../icons/lucid_2-file-spreadsheet.svg?v=6d5b1d5895f8ced48c70600eb293df9df809a497fe4a588f435898bd1cf47c8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
