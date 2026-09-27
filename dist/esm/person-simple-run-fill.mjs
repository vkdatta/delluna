export const name="person-simple-run-fill";
export const id="dl_e400ae051fee4e56a64b";
export const url=new URL("../icons/person-simple-run-fill.svg?v=da7a695e6ce3d3d4cffa0e2511bf48f1ddcef00bb813be26f422f591bc5b3ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
