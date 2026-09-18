export const name="tooltip-fill";
export const id="dl_9be6e528fd144a378c5a";
export const url=new URL("../icons/tooltip-fill.svg?v=ee4ce3c0ca2d67f14f9d22361c5e910a37a757a565b20daa2f6224b9ffe77c6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
