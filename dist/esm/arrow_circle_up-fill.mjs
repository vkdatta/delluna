export const name="arrow_circle_up-fill";
export const id="dl_a52bfc408ba9406ec816";
export const url=new URL("../icons/arrow_circle_up-fill.svg?v=1c6cf2e5ffe66ce62c4dd6deedcd1ff1705caf8a8e27e06f362be1e0aede5264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
