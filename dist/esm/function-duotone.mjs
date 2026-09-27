export const name="function-duotone";
export const id="dl_a15cc21efec443eebdf0";
export const url=new URL("../icons/function-duotone.svg?v=01073e3af668ffb495a9140e5a903d0dea8d7744c078e5db6892776a865bac60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
