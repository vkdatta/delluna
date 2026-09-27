export const name="account_tree-fill";
export const id="dl_cbef77795cf78930e1ed";
export const url=new URL("../icons/account_tree-fill.svg?v=3aa036bd61b4b4af1e7603f7be7fec468c0c0f9ea869fb7cef01ba978c1b3e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
