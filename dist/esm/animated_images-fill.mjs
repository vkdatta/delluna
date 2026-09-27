export const name="animated_images-fill";
export const id="dl_78ad2bce8a699465f19e";
export const url=new URL("../icons/animated_images-fill.svg?v=e96074b3ca74b4450af5fb7e650f0436ee1b0441d4d76e22c32fcffdf978059e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
