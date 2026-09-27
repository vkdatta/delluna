export const name="wheelchair-motion";
export const id="dl_1b64f17fa60bb7425ab0";
export const url=new URL("../icons/wheelchair-motion.svg?v=117ef3ccc70ea6d5c1231e0964b588f82fd0be0c8732d0124b7037815d41791e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
