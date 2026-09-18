export const name="tv_remote-fill";
export const id="dl_923d7a24dc6c4c208ad3";
export const url=new URL("../icons/tv_remote-fill.svg?v=9beac816b075f24692c757fa64182299d62fe7b674178e4ce34140035662f988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
