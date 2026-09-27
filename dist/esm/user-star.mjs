export const name="user-star";
export const id="dl_933018c9ed7841a49ef3";
export const url=new URL("../icons/user-star.svg?v=e4f55317b36262c10a14b8d160da47f3213fa6f6feb2dd611924788d4c1de304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
