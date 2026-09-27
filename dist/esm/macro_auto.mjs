export const name="macro_auto";
export const id="dl_ed46e74a10f21cbc5f0f";
export const url=new URL("../icons/macro_auto.svg?v=e6e34f96fd4e3936d49676f2f7832b91e902b3f502afc89eb7f7599a8caad334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
