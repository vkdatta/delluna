export const name="instagram-logo-fill";
export const id="dl_9fde1c10ffa34e9a9550";
export const url=new URL("../icons/instagram-logo-fill.svg?v=e46e0f8e4c2bcbfafbebaf7c5e7b8248e6de2139eb63e108bd27ce0c3ce48031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
