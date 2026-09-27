export const name="sort-ascending-thin";
export const id="dl_e0a3d4d04fce871cd483";
export const url=new URL("../icons/sort-ascending-thin.svg?v=665853e0a8da5b77e65dd274a88f76a8db7772422fc6b93cdbf6751fdfb7f616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
