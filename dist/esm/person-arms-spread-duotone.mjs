export const name="person-arms-spread-duotone";
export const id="dl_d1bc2c77dfde4f9ebdd6";
export const url=new URL("../icons/person-arms-spread-duotone.svg?v=28e7f65b547f834b3980304aabc7a5e8d9a86d8906c72499a938835e9c6441ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
