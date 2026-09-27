export const name="headphones-light";
export const id="dl_413e7b8ffeed43c88dc6";
export const url=new URL("../icons/headphones-light.svg?v=936243b8e35231463cb70d3fd6dc4f713405c4d68502fc7a2ff4a525563fecee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
