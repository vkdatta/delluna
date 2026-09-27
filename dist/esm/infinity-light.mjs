export const name="infinity-light";
export const id="dl_f9656623799f4a27a4b9";
export const url=new URL("../icons/infinity-light.svg?v=89df9e8d73bfc8fcd105771f4e27d298d846a76a5fe5ffbdbf7f80512c4e49f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
