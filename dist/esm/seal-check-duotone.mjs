export const name="seal-check-duotone";
export const id="dl_23e3989cf7730b4b6274";
export const url=new URL("../icons/seal-check-duotone.svg?v=c7ff2a1e82b255664c2e7ef6e1f606a02a76c50f08348f9133ad269fa79e5006",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
