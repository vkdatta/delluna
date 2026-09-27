export const name="user-list";
export const id="dl_218b51f3d69be3006dad";
export const url=new URL("../icons/user-list.svg?v=e46d0f6f4347e6509fdd384bfe5afd35840a0c5d1d4acb3df879d7a75b16cb24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
