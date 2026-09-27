export const name="radioactive-bold";
export const id="dl_b63cbf51ec5c4922af42";
export const url=new URL("../icons/radioactive-bold.svg?v=552dab2d09b21942563eacd59ff603801690ed7495d1495705ed6c95a4c8f45a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
