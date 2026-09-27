export const name="odt-fill";
export const id="dl_5e3d72160736042726d8";
export const url=new URL("../icons/odt-fill.svg?v=8e12279dec3789e86f61b5f406be4b4b4cc9e58eb53809cabe1295ecde0d177c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
