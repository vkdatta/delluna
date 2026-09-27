export const name="plug-charging-duotone";
export const id="dl_71766a0693214212b479";
export const url=new URL("../icons/plug-charging-duotone.svg?v=878b270599202416bd0f9f60e6f07b1ee32fdeeb6f1f81664440e5c275ac09b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
