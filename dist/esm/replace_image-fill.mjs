export const name="replace_image-fill";
export const id="dl_7999ef09bb8b47e59ab0";
export const url=new URL("../icons/replace_image-fill.svg?v=546d6c69c9d74e182795d6ccfaf320cac799853e6d0905c6e4ae2c478647908b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
