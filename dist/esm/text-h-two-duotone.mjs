export const name="text-h-two-duotone";
export const id="dl_825d73e31cf216b37535";
export const url=new URL("../icons/text-h-two-duotone.svg?v=e964141c611141b32a09ffd5a96697c4007014dfcfd8c9dc3e9127d77443990e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
