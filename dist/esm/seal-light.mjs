export const name="seal-light";
export const id="dl_a82a4ba3587b697971ed";
export const url=new URL("../icons/seal-light.svg?v=72946a24877417162457e6304e7dd7c6df599d2f6700fa55d2349ef1653c553d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
