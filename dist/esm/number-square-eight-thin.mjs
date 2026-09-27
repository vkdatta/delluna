export const name="number-square-eight-thin";
export const id="dl_55d552a1950142f79ead";
export const url=new URL("../icons/number-square-eight-thin.svg?v=e7692ef4c5ad6dee0ec6992701e4963b0687e276a3e447b0a680ba5891d817a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
