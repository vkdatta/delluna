export const name="artist-fill";
export const id="dl_3881bf7a15c16e5a99dd";
export const url=new URL("../icons/artist-fill.svg?v=43ceb796fcb33a65a050d9e4600faeb83697850827382ab01b083cb8b8ff85e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
