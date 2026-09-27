export const name="account_child_invert-fill";
export const id="dl_d953600116b24c7053dd";
export const url=new URL("../icons/account_child_invert-fill.svg?v=64f0ab544ae63768b81911ad0fe779a9b95db777016e3ed0eb541b7b391ee87e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
