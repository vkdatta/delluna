export const name="wall-duotone";
export const id="dl_bc228b4f28e542e7b983";
export const url=new URL("../icons/W/wall-duotone.svg?v=e345ee0236e194f3ab7c62106430f785da8e1e54031e9a07912156971eb02de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
