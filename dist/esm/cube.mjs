export const name="cube";
export const id="dl_1ba8fbc8a96045c6ac8e";
export const url=new URL("../icons/cube.svg?v=2faaff3e1194eea0c45dcce3ffcf61ea4f58aa5627e02f26793990afeffa4914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
