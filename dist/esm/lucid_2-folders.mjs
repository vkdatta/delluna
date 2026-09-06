export const name="lucid_2-folders";
export const id="dl_0dfe9fac3c3f42218007";
export const url=new URL("../icons/lucid_2-folders.svg?v=84240924d04b10c0785ba80585b9afe06ebee2258cb14c6a1b7ae5596beedf74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
