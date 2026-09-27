export const name="parabola";
export const id="dl_9f42c9764f804d7abd2a";
export const url=new URL("../icons/parabola.svg?v=fa12b3eee1cb5a571c34af539151fbfd053c50e80ca26eb61d442636bffae84a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
