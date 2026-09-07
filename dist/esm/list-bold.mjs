export const name="list-bold";
export const id="dl_d2697430c8bc47cb9a2f";
export const url=new URL("../icons/list-bold.svg?v=eebf2179178a5d4e93097a35f6a02efec45db6a88c1fbbc027fe81a167fd910f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
