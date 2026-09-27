export const name="cloud-lightning-bold";
export const id="dl_e49a3be93fb646a78d50";
export const url=new URL("../icons/cloud-lightning-bold.svg?v=f6246e1bc69db29a15393ac4242be777925a0b376535e7616e4626da5e1a87ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
