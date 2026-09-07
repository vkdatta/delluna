export const name="list-plus";
export const id="dl_310bf65fba224906b315";
export const url=new URL("../icons/list-plus.svg?v=1ccf408d250463a883aa460887949041d2de8e8085ba19b607e8226cb7ddad12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
