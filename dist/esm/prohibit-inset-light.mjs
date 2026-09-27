export const name="prohibit-inset-light";
export const id="dl_38682064ac0d42058d54";
export const url=new URL("../icons/prohibit-inset-light.svg?v=7a7d8cac3484ad03665de6b7a744a47c0a8c6eb0cadb451bd249bb2a182267b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
