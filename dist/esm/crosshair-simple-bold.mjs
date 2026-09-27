export const name="crosshair-simple-bold";
export const id="dl_876cee174b30407a89da";
export const url=new URL("../icons/crosshair-simple-bold.svg?v=6ced4bf5a338e46af0254d199f0c1d7c18147fc455718d67836b1489034dbb4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
