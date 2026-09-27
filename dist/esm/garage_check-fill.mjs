export const name="garage_check-fill";
export const id="dl_309ae105990837d29d14";
export const url=new URL("../icons/garage_check-fill.svg?v=0e143f06e05f50e96e9d5442b2d51a6d6e911a83306a0c02bfc007fb7fd3b430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
