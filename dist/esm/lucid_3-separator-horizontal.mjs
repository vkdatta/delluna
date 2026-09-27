export const name="lucid_3-separator-horizontal";
export const id="dl_655b581df49941dea478";
export const url=new URL("../icons/lucid_3-separator-horizontal.svg?v=55b9a2d33d72f0448d0ec27e5c1cf65274686b32169cd624ed101976afa305b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
