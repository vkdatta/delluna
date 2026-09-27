export const name="stripe-logo-bold";
export const id="dl_c708e25a84d8193554a2";
export const url=new URL("../icons/stripe-logo-bold.svg?v=556964ab130a492a89d1f66d037014ddc23a08a0524ca1f20d41fbf05d88a3fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
