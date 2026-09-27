export const name="rug-thin";
export const id="dl_c49871d566b146b0be97";
export const url=new URL("../icons/rug-thin.svg?v=f46364e0f672333bac52bb100d56a2ede401b17bf13fbdfca1c7e8175d468b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
