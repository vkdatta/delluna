export const name="dots-six-vertical-light";
export const id="dl_bddbd5a22ca241cd8784";
export const url=new URL("../icons/dots-six-vertical-light.svg?v=fa9c941bfa510218de5c9e4cec4317f0d2f7f7a3640dd1653d6fe8538c812832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
