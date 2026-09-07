export const name="square-split-vertical-duotone";
export const id="dl_fb119b2b9c1c4e2a9d28";
export const url=new URL("../icons/S/square-split-vertical-duotone.svg?v=5ca19126dae26c0bfd402c9a399f5c6c26f1d173514cd7bafe00e1b5681f3b08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
