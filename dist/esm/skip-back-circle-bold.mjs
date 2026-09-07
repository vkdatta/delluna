export const name="skip-back-circle-bold";
export const id="dl_c866c967dfe64cf1ba6d";
export const url=new URL("../icons/S/skip-back-circle-bold.svg?v=24782b145211b88eeed7652ea81bbb75c051a50bb64c7f707475e22eaea2a0b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
