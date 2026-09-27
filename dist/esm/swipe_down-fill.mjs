export const name="swipe_down-fill";
export const id="dl_db4596704dc8a9530aa6";
export const url=new URL("../icons/swipe_down-fill.svg?v=a1766794057c8d9dbbb81e91df01f2ef3be8ba64f8f156477ba1c8534255812b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
