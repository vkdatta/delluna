export const name="picture_in_picture_mobile-fill";
export const id="dl_3e23e1813a69a69b4144";
export const url=new URL("../icons/picture_in_picture_mobile-fill.svg?v=69ca467aa3854b78ea62d591bd26680ec8c2c6e87a06864f47855ecd936bc973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
