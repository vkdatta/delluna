export const name="cookie-fill";
export const id="dl_2f3f12638bf4f012d880";
export const url=new URL("../icons/cookie-fill.svg?v=f8d934fa5aaa469cf38bc9f9df9aefcf77a7ae84a1d0c4319e023b471924339c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
