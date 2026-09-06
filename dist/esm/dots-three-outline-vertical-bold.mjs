export const name="dots-three-outline-vertical-bold";
export const id="dl_e96ae3f0d80c43f89431";
export const url=new URL("../icons/dots-three-outline-vertical-bold.svg?v=8404733f05362846d36b67e120df398d643656947cacde39d5afc22e66409f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
