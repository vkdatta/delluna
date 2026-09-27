export const name="file-arrow-down-duotone";
export const id="dl_a1f67b1bc7504039b31b";
export const url=new URL("../icons/file-arrow-down-duotone.svg?v=889a590352f6cfd2a39d96fe2bb346521e1cca907ff671e17b140775406d68d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
