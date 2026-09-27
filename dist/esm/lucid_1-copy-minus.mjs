export const name="lucid_1-copy-minus";
export const id="dl_ad5c49a3d499474dbfe9";
export const url=new URL("../icons/lucid_1-copy-minus.svg?v=806344fd938c67efe1fbc0d764e48dc2512a35721c7ee922a29d30fb5458b17e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
