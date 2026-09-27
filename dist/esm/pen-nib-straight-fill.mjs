export const name="pen-nib-straight-fill";
export const id="dl_3b8ba24c1021414f967c";
export const url=new URL("../icons/pen-nib-straight-fill.svg?v=5271d1a7bfcb4f7e371700f7c558acef483d6c74286745d67cee2c5e1ab07e13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
