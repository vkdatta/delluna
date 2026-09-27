export const name="merge_type";
export const id="dl_8d90e16d4955f9fa179f";
export const url=new URL("../icons/merge_type.svg?v=b0a2fb9cfc4a8c52471dfb1f802d34a4f18e80fe0dd6f238903a7d0767893deb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
