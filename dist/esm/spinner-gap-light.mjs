export const name="spinner-gap-light";
export const id="dl_407f97fc58bd43cbaab4";
export const url=new URL("../icons/S/spinner-gap-light.svg?v=79fa7992c3714f848a4eb1f9bc9f6eda3d4cb080850e396abdd8148afb3e1e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
