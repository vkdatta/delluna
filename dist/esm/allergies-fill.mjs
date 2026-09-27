export const name="allergies-fill";
export const id="dl_b2710469d9fbc42986da";
export const url=new URL("../icons/allergies-fill.svg?v=af57b8f0b7dfd6d1cbf69235d60deb2faa8bd9cf5cd47d9a603b47807f8acc3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
