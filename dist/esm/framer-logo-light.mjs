export const name="framer-logo-light";
export const id="dl_b1931312d86641ac943a";
export const url=new URL("../icons/framer-logo-light.svg?v=a32c91be89145121daa6af356ba7fde4c1ead640b78b63598783f5a076a7c366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
