export const name="draw-fill";
export const id="dl_7b4f2af1a7c821667dc8";
export const url=new URL("../icons/draw-fill.svg?v=d0fe3c24d2138884e18d67b79bb79357a20121e09a0a21d0741c6aeae8e2548d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
