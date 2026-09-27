export const name="box_add";
export const id="dl_9dfec6b83919d631e28a";
export const url=new URL("../icons/box_add.svg?v=4b480a2d74de483f837835711c0be8ef1eb987ad36225f6df179b409f5eacb48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
