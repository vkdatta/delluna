export const name="copy-simple-light";
export const id="dl_295fd1d7b4ec48b186f6";
export const url=new URL("../icons/copy-simple-light.svg?v=a7ec3c81ade2c6660c309c325f3889828e7d1d9d438409ec5cd37b8de01d909e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
