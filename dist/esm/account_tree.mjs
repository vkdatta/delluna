export const name="account_tree";
export const id="dl_c9f62add9434976adf2f";
export const url=new URL("../icons/account_tree.svg?v=63c295e5689462362cae54864b04978c316d7f9ea51c9cfa23c694e117d540a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
