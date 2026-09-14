export const name="account_tree-fill";
export const id="dl_abe41c271c6c4315bb58";
export const url=new URL("../icons/A/account_tree-fill.svg?v=f62dc5802de0d6e4b908f9d22a062c615f4ed40bfc9ca7477b8075aa1b016e17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
