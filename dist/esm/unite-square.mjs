export const name="unite-square";
export const id="dl_b554169d2636496eb259";
export const url=new URL("../icons/U/unite-square.svg?v=67c062ded49c4fda1680fd3338643b595ea2b8cd156609c93a64fae1fa035275",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
