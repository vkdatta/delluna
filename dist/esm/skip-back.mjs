export const name="skip-back";
export const id="dl_45a60b9b8f7e244e5443";
export const url=new URL("../icons/skip-back.svg?v=e18ea9672c9a8167f2614889b75ec919e56ec3a3fb27b655d31ca8c7dac2b253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
