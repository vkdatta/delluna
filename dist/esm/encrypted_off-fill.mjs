export const name="encrypted_off-fill";
export const id="dl_7c8cf26167c2198a08b1";
export const url=new URL("../icons/encrypted_off-fill.svg?v=1667297a458d78af7cce7d609d99ee70a6a4abeb6bfa383ff199f6f93558a6a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
