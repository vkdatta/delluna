export const name="rectangle_add";
export const id="dl_080066bb46b04e3ab2c7";
export const url=new URL("../icons/rectangle_add.svg?v=756693426080607411d1919d44622f94d86f3904bbed72a5497d46224b668955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
