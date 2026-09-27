export const name="magnifying-glass-plus-thin";
export const id="dl_ef59d031916940ecbb8f";
export const url=new URL("../icons/magnifying-glass-plus-thin.svg?v=f17ec3cc849c454b23a4dbf8e697c242c5bdba677718caf49cf79b267726bd28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
