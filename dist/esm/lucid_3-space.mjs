export const name="lucid_3-space";
export const id="dl_2ef440957c074b359e00";
export const url=new URL("../icons/lucid_3-space.svg?v=c2d16fddea85d9203539d4423a359405df8500b66bfd491d27e7979d75c998bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
