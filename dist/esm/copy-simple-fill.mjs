export const name="copy-simple-fill";
export const id="dl_f86c2ce6931f402fba9b";
export const url=new URL("../icons/copy-simple-fill.svg?v=383de2b519ddc5be82d31221c189c4e4e43b58c0b4933f2f402e482d8b428795",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
