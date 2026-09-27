export const name="sun-dim-fill";
export const id="dl_9225ebd383e1c7e37a21";
export const url=new URL("../icons/sun-dim-fill.svg?v=8baf47f7e79f4a3cc492c0090a5fd844bfc26fd4c7848ab94f28e067baaf3af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
