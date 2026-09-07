export const name="sigma-duotone";
export const id="dl_334160353d4141d09262";
export const url=new URL("../icons/S/sigma-duotone.svg?v=08869d0a5771be115573d4ae0fbf0cd313780d329208c69cca3dd6b62b9c36dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
