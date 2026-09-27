export const name="coat-hanger-bold";
export const id="dl_b2d8400307f74b9eab34";
export const url=new URL("../icons/coat-hanger-bold.svg?v=137180a2ffd1248a8da3931f45a441349e5fd8a9abefcf5ea05836deda94abfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
