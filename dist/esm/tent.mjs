export const name="tent";
export const id="dl_56db3641bf81480589ee";
export const url=new URL("../icons/tent.svg?v=89d86e8132b231689f5c44c93a43cdc652c71514518fad86f48774876de62cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
