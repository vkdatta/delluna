export const name="building-apartment-light";
export const id="dl_312908bf01e749fb8138";
export const url=new URL("../icons/building-apartment-light.svg?v=c338c7e7a394a5195e77c88b5825e2abd059327345ee7cd8b3a00f2484921ebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
