export const name="person_4";
export const id="dl_ce83879884781ea19b63";
export const url=new URL("../icons/person_4.svg?v=9f74df687812242ab8af50267fae5853f727bdda23e38756d202c46803f6e407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
