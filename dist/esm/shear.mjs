export const name="shear";
export const id="dl_4319da88c03e4b2984ee";
export const url=new URL("../icons/shear.svg?v=a055c31cc8b0738895bd7e9f3d4f0f26d131dbaafa5382aa01693eb7890d93cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
