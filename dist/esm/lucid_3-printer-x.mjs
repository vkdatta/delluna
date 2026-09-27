export const name="lucid_3-printer-x";
export const id="dl_c44dc97948a94c7e82eb";
export const url=new URL("../icons/lucid_3-printer-x.svg?v=9fc07c138a9039cc2aff875a77c3105b2d53aa818da43e219c7dc05de1316c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
