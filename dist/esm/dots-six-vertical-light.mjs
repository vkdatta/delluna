export const name="dots-six-vertical-light";
export const id="dl_bddbd5a22ca241cd8784";
export const url=new URL("../icons/dots-six-vertical-light.svg?v=686f612bf6cc10bcd9b100dfb145b6858d973456efcc8aa9c6abe054819f5612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
