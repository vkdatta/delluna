export const name="lucid_3-milk";
export const id="dl_5c187142ff9a4e37962f";
export const url=new URL("../icons/lucid_3-milk.svg?v=00e8a02c6969e9315b27fa73a0171cb82da3bdcfcbed984e2a3d94acd9ca8d14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
