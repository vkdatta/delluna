export const name="trophy";
export const id="dl_e12fd020672a410288a9";
export const url=new URL("../icons/trophy.svg?v=406f753cbe6c52817c55b9077cc57841f6a49da8d13119e9b69b1dc828893dce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
