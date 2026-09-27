export const name="list-numbers-duotone";
export const id="dl_e488218c0781494d83e0";
export const url=new URL("../icons/list-numbers-duotone.svg?v=9199b45e658633ba1fa6c6f998b076d6d6613b0308376209a44bdef80d866895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
