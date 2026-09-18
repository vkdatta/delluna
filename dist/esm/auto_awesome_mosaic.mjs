export const name="auto_awesome_mosaic";
export const id="dl_2c55ee096d5d4044be47";
export const url=new URL("../icons/auto_awesome_mosaic.svg?v=349c5a0a4f989ec9a8fad50d00ec328cccf6c4e2ad94264926bbada59a43492d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
