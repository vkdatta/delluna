export const name="panorama-duotone";
export const id="dl_a2bfc6cef5bb4ea09fa3";
export const url=new URL("../icons/panorama-duotone.svg?v=7e8a7bd6027bd8f1f41ecc144529c43142293cd03609024ae01c831642d5221a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
