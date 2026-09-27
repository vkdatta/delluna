export const name="arrow-square-up-left-thin";
export const id="dl_d721aa467a244f089e1a";
export const url=new URL("../icons/arrow-square-up-left-thin.svg?v=51b6d9e96d22c5e5e524e790d418a680b773102deafa0db0fcbdefe1f8f8e679",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
