export const name="two_pager";
export const id="dl_004cff17614c5025fb6f";
export const url=new URL("../icons/two_pager.svg?v=ce829bb4ec77c7c89ff0471162096930784d081896206f713cf923c4b0ff6826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
