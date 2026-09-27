export const name="ink_eraser_off-fill";
export const id="dl_398192aee76fa2993632";
export const url=new URL("../icons/ink_eraser_off-fill.svg?v=67a852ee62f7795354ca72966080e6cd3961514c2e785b9c72d7a1bd1b375106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
