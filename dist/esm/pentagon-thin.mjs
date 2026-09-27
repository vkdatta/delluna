export const name="pentagon-thin";
export const id="dl_a440e6f074d54a43a5f8";
export const url=new URL("../icons/pentagon-thin.svg?v=999995da2ce130111f3bb4c923065753d9c893480656d198fe01f5ccd1b54dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
