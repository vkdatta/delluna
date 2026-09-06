export const name="moon-light";
export const id="dl_252066b019374ae192a2";
export const url=new URL("../icons/moon-light.svg?v=949a1ab1483df14e4d25db4839d6430baed5adca66f50cd58026f3c7fa7c64c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
