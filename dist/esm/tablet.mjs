export const name="tablet";
export const id="dl_bc36c5e8381e4ed3beed";
export const url=new URL("../icons/tablet.svg?v=3b444713d0748a2d11dad84d7aaf33240e9aef3fcff164027092368fb67d43bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
