export const name="circle_swap";
export const id="dl_ade936df477b428c919e";
export const url=new URL("../icons/circle_swap.svg?v=73edbb5e9e568931c121942d7fb8db339122299b263e9a5a0593dd60516a007f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
