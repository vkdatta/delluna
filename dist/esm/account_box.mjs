export const name="account_box";
export const id="dl_5adeef9173c350a90071";
export const url=new URL("../icons/account_box.svg?v=5f24201b4e0d59e1290172cd61598eff0f78c1b3be9f05a275227721e26bfe58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
