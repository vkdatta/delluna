export const name="flatware";
export const id="dl_b70dadaa3c73069dd06d";
export const url=new URL("../icons/flatware.svg?v=5a94e01df63b9b745748608c2e180583bd01b198ecfc6029211bc0027d49c2d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
