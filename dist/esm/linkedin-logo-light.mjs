export const name="linkedin-logo-light";
export const id="dl_c7352c2e96df44f7a106";
export const url=new URL("../icons/linkedin-logo-light.svg?v=3dd5bf24ee51257a012e9491836f973ea628492f0fb7bfb33022bf309795d961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
