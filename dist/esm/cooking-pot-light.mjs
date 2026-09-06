export const name="cooking-pot-light";
export const id="dl_bd64f3e79ffa45e785c0";
export const url=new URL("../icons/cooking-pot-light.svg?v=d1bd39005cb037f889901e6007227b08d0b7dad16006f604a0be85c58b46863e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
