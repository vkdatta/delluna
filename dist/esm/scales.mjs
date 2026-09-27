export const name="scales";
export const id="dl_faf60a13641bb1c1c4dd";
export const url=new URL("../icons/scales.svg?v=4ef32c31475bdf33093c9e7d88e40584d7d54788e0b78ae89e44b84c32fd55bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
