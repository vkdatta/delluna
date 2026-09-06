export const name="linktree-logo-light";
export const id="dl_a0ca94d2ac58462da74d";
export const url=new URL("../icons/linktree-logo-light.svg?v=d662f6450567577e859e3a8b711dfe08b9e4f80634d229db306de06ec26f9d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
