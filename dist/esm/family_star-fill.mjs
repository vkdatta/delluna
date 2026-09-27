export const name="family_star-fill";
export const id="dl_d4b8b6c5bd529a72cc4a";
export const url=new URL("../icons/family_star-fill.svg?v=ef9e3a61ce22b10260535111176e8f6c65117b37777ccb8f4ddaadb3a6ed5f40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
