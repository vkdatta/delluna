export const name="arrow-down-light";
export const id="dl_682b7a3fe6fe49c585d7";
export const url=new URL("../icons/arrow-down-light.svg?v=cfa9a3ff7b26eff17cacb86ae6e9e0839550318ea239e47596c1e37d87097998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
