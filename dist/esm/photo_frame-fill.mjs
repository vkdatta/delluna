export const name="photo_frame-fill";
export const id="dl_8fcf15ba3b1ad2b18092";
export const url=new URL("../icons/photo_frame-fill.svg?v=b5ad424cd885b7e49db3dbda254d8b6f9f95dbefe3ba4fac65e31b09a6b3ceef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
