export const name="globe-simple-x";
export const id="dl_561e1b8ae7174a20bad7";
export const url=new URL("../icons/globe-simple-x.svg?v=9f16e9049a91e72d77a03bf2ac6a7f2d6cca879a751604966089d8b7d78dbc2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
