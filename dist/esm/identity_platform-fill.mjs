export const name="identity_platform-fill";
export const id="dl_3929785c2ffc19c84e4b";
export const url=new URL("../icons/identity_platform-fill.svg?v=d5dd5e984448c210045115b5e932ed03b51493b4afe4c3806276027f330f70aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
