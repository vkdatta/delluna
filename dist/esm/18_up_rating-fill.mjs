export const name="18_up_rating-fill";
export const id="dl_8d9fefe0fc35449ab4d9";
export const url=new URL("../icons/1/18_up_rating-fill.svg?v=dcc91b824a60cfa8ba8d52aad0caf3fef1cf33be5252f4c93e9fc3dfb5a9fd54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
