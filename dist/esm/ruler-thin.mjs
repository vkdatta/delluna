export const name="ruler-thin";
export const id="dl_af74c520bc25402fa932";
export const url=new URL("../icons/ruler-thin.svg?v=6d0e5949fb1c59b5416f4e61a039cf5c7120a663f012cb523eb956faca66597e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
