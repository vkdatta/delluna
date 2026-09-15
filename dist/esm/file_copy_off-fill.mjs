export const name="file_copy_off-fill";
export const id="dl_ae019733b92b435e9030";
export const url=new URL("../icons/F/file_copy_off-fill.svg?v=63fa267342cc528a270f4e8ae15ac22cfc47abcd2c5b1a45ec11462938825fb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
