export const name="laundry";
export const id="dl_fb98ca8e296e4c21bbec";
export const url=new URL("../icons/L/laundry.svg?v=aa7117aadfd6590d7436104fe30a37fe1dfda856bf679e809e9770f4e1f95e87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
