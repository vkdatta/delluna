export const name="film-script";
export const id="dl_efa8313d880a4fc08338";
export const url=new URL("../icons/film-script.svg?v=7095bbeeb6985b915758fb077951842f65c6288c69be2020c8eb27fce046e233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
