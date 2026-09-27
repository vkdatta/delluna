export const name="graphic_eq";
export const id="dl_c8fb659b55776006d601";
export const url=new URL("../icons/graphic_eq.svg?v=bc7d7e19dc378904bc5454c8ed52d7df36a2e260ee4f1e9209f0ac7e4acdc881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
