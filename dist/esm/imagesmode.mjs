export const name="imagesmode";
export const id="dl_82c0c948cf8858aa8d1a";
export const url=new URL("../icons/imagesmode.svg?v=efeb6609c8624a1fa15c2dd0a845d5deff51b5d8ae78cbe5e6359807076363bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
