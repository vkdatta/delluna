export const name="steam-logo-duotone";
export const id="dl_0327f2a8f1d9761f0ff2";
export const url=new URL("../icons/steam-logo-duotone.svg?v=4e11af81781d01e3adf3e3cbadf198cfdbc5a45b30317240fb303c7fda6cd307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
