export const name="jeep-light";
export const id="dl_de5c3ffe30404795b20f";
export const url=new URL("../icons/jeep-light.svg?v=3b8ddc36c0cb0582c08e1aa53df62bb45afc4379d16c10b223d1aba366c3ae90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
