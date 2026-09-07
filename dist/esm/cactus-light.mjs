export const name="cactus-light";
export const id="dl_7985060568be4c44abf9";
export const url=new URL("../icons/cactus-light.svg?v=da69ef7cd85355b5b47e30c25eedd8a53d1b554a4ff43e33f49d5faba3ee4b59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
