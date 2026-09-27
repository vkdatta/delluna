export const name="toggle-left-duotone";
export const id="dl_f4d666d3666304ba0a0a";
export const url=new URL("../icons/toggle-left-duotone.svg?v=43f84a4bb574b28ddf4a7707577c6312d3651907d6d0523706c43197f22b2033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
