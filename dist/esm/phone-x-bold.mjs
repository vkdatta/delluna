export const name="phone-x-bold";
export const id="dl_0cf1390099bc4c7fb0f3";
export const url=new URL("../icons/phone-x-bold.svg?v=5448f46e9988591c5360c5fa626bfa0ec7decfa6109510c8eac21f38b0359805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
