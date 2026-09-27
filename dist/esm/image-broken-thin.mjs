export const name="image-broken-thin";
export const id="dl_41b5e29cc3c04ab7ae85";
export const url=new URL("../icons/image-broken-thin.svg?v=dd024e2a715a43749735fe98a26c1d21d6d92a414e9f4aa894ea18dddb9fcac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
