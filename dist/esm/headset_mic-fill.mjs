export const name="headset_mic-fill";
export const id="dl_e5aee032edb72891e46f";
export const url=new URL("../icons/headset_mic-fill.svg?v=c28426c26697c5710bce40f44165588faee6e0399beadc81d52ad9df8f8d827c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
