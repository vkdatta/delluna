export const name="arrow-clockwise-fill";
export const id="dl_b98cbba4266f41d7b26b";
export const url=new URL("../icons/arrow-clockwise-fill.svg?v=3145a4e417450914c26c9a7df5aff8390460ce223c3f28e6e0e8728cb9ebd185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
