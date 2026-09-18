export const name="photo_library-fill";
export const id="dl_14367f732af546aea887";
export const url=new URL("../icons/photo_library-fill.svg?v=75e44fb7c88da3e4e0007f66c17a8b587ccd8b58dc986cf0438b46d5726e5cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
