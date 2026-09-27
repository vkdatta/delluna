export const name="polygon-light";
export const id="dl_b5997c1886df4c7296bd";
export const url=new URL("../icons/polygon-light.svg?v=a37596b9b476ed6abaada2fba4dfcea62ec5a48531a440ab7e327aedabbcc3f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
