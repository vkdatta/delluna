export const name="supervised_user_circle";
export const id="dl_ed3f6ca6bbd494bc4763";
export const url=new URL("../icons/supervised_user_circle.svg?v=3c9a47aef27877dcba1efd6df2b2430b80f2e566c239de2e0eb15e6fd87fdf97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
