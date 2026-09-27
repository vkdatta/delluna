export const name="zodiac-pisces";
export const id="dl_ef15a704c0404ead857a";
export const url=new URL("../icons/zodiac-pisces.svg?v=56b5d1cd3601d4789f013f0726d6c6de04459faba707c4d887a9574e422d3e2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
