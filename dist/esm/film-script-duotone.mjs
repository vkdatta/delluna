export const name="film-script-duotone";
export const id="dl_e7ece208190a43e2a146";
export const url=new URL("../icons/film-script-duotone.svg?v=be91abdf67bd9ee63366aa4e676edc08780dc70b73f180c1b9f4484161be95f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
