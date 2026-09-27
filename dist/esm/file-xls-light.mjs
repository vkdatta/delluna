export const name="file-xls-light";
export const id="dl_a25283cf4c994076b525";
export const url=new URL("../icons/file-xls-light.svg?v=07b9363ec88acab1d80bf79f3113b8193067763b14575e5d41bf65401019ad0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
