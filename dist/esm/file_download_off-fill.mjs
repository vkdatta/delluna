export const name="file_download_off-fill";
export const id="dl_c292e180996c47e2a7f7";
export const url=new URL("../icons/file_download_off-fill.svg?v=c154b707d206940eb218786626fded10b0f7daf4ab8b8e111a85bf74634d6323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
