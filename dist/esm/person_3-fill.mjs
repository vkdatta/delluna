export const name="person_3-fill";
export const id="dl_70b4b7f3ba969190291c";
export const url=new URL("../icons/person_3-fill.svg?v=84cb9abfd87587cae6d333ffa70d80ece02a7e3c32e50ac9f4aa05e955b5d114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
