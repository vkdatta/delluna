export const name="exclamation-mark-duotone";
export const id="dl_56e80d377dc74b6780f9";
export const url=new URL("../icons/exclamation-mark-duotone.svg?v=9a527c3124bd34c0649f6f8ebf5cbe5586b266e3d011c1d1ee51d10454f19eba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
