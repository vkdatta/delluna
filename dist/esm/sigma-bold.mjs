export const name="sigma-bold";
export const id="dl_6506b54a9900d307b85e";
export const url=new URL("../icons/sigma-bold.svg?v=f613f0f127366e3aba745ea2c8641b26a4175553b8ac1c9f8f34ca2ee057db85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
