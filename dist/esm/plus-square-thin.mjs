export const name="plus-square-thin";
export const id="dl_0984ae8854f849d09b5e";
export const url=new URL("../icons/plus-square-thin.svg?v=285fe912ccb35cfc72c2e38b468dd3eb7a7bfe977c77deb8eb235f3d1646a602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
