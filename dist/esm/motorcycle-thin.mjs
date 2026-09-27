export const name="motorcycle-thin";
export const id="dl_273fa777083f49a5b8f4";
export const url=new URL("../icons/motorcycle-thin.svg?v=fefadf0e83b75416ab5655e0304b334f47ccaf200bb5bdf15777e4ef25e04738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
