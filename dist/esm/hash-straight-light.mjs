export const name="hash-straight-light";
export const id="dl_00b5500155e24f9bb5c6";
export const url=new URL("../icons/hash-straight-light.svg?v=8def69b1c92900a1679df3be88ecf3550735b89f104b2dbc6e7b166588ace93e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
