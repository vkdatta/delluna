export const name="lucid_3-panels-left-bottom";
export const id="dl_3f95510e33724d44a1c9";
export const url=new URL("../icons/lucid_3-panels-left-bottom.svg?v=2239df5dc9cf10dfb75264f6303f925e45c1992940b7f6936269a5fe37e9662d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
