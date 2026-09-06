export const name="film-script-duotone";
export const id="dl_e7ece208190a43e2a146";
export const url=new URL("../icons/film-script-duotone.svg?v=c48d2cc9751bc496cf641e977b43d34b21e9138400587d5014cf9322c9982645",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
