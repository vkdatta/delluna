export const name="logo_dev";
export const id="dl_35a562f648c1e992fba0";
export const url=new URL("../icons/logo_dev.svg?v=ee830d47e0c026163d9a33a8de1c643db9bf2045c3ff1e4684e471c77edcee9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
