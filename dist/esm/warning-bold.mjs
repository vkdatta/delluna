export const name="warning-bold";
export const id="dl_443cd9ff480e7d2a3fa3";
export const url=new URL("../icons/warning-bold.svg?v=773008c8a3c22925e8f7607c5d3319f9864766d2ad9a5bdb98cd3f6bb1953f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
