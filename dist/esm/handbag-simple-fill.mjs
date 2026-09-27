export const name="handbag-simple-fill";
export const id="dl_9386946fa35043a7a24e";
export const url=new URL("../icons/handbag-simple-fill.svg?v=f4dda4373b99fb7bea84e85aa13c131b86bd22735f4ef5b8e09754a74287d9b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
