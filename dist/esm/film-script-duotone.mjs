export const name="film-script-duotone";
export const id="dl_e7ece208190a43e2a146";
export const url=new URL("../icons/film-script-duotone.svg?v=a412c8908ebe1b3a0a991baaa19052693209eda85bff5031d32905021730d185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
