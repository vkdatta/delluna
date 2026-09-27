export const name="horse-duotone";
export const id="dl_c445ab8b872f4a7da030";
export const url=new URL("../icons/horse-duotone.svg?v=240c839ff793975908d52ecc02c955bad3fc76915ca67d45bd8b98ba3f29cd6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
