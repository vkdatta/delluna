export const name="lucid_1-align-end-vertical";
export const id="dl_1edcf176291646139203";
export const url=new URL("../icons/lucid_1-align-end-vertical.svg?v=ebd72e2100aa25e55c48fe7e90a796ea3e5e92ccb40ad7468d653e0a9760f478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
