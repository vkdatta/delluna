export const name="account_tree-fill";
export const id="dl_299c6327a2d594a592a4";
export const url=new URL("../icons/account_tree-fill.svg?v=3e937b8cbfba33a801cf5bf8d53371376debb46890dd203f4f041513c9075430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
