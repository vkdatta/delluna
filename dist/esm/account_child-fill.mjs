export const name="account_child-fill";
export const id="dl_b3a1d1c3a74e5b536d75";
export const url=new URL("../icons/account_child-fill.svg?v=f3b9bcc885eb5d0c7834e55a369676656ebdcec43532a9c384ab41914f78fe47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
