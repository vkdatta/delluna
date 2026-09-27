export const name="file-ppt-light";
export const id="dl_fc69572bac5d4ea997d8";
export const url=new URL("../icons/file-ppt-light.svg?v=ed039a44b9430b458a7a703f1436dd7bce33420cac48ad800458e994de1162b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
