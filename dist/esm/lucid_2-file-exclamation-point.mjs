export const name="lucid_2-file-exclamation-point";
export const id="dl_217e7210f1374096beea";
export const url=new URL("../icons/lucid_2-file-exclamation-point.svg?v=a7d3b2405c25468f1e057e31e93579236585cb6faf5e05050af0548f56180296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
