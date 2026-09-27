export const name="person";
export const id="dl_556192a520ab5bf0e193";
export const url=new URL("../icons/person.svg?v=7ce47a08eb6242207f71ddbd28921bf2b0ed0eaf5b341c03c63c5f1a9757050d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
