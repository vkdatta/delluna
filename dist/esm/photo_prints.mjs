export const name="photo_prints";
export const id="dl_73f6262e03e045bf9910";
export const url=new URL("../icons/P/photo_prints.svg?v=a6a4f404f931848555d978f02da29608cebcfa92ec91c54525f8ec6c5ecfdab1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
