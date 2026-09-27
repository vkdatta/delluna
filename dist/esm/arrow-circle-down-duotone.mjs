export const name="arrow-circle-down-duotone";
export const id="dl_9c1d4448711e428d8b38";
export const url=new URL("../icons/arrow-circle-down-duotone.svg?v=a9e184eadeac54ca83a4873fe9c2742c4d91398f2472fdc0da0e370db397def9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
