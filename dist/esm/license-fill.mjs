export const name="license-fill";
export const id="dl_1d17b41b293213b97aa1";
export const url=new URL("../icons/license-fill.svg?v=453ca4c7ca457f20dd16906786bd7622c1f14e83295cb23d4451353df3e62ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
