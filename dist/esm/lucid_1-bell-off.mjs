export const name="lucid_1-bell-off";
export const id="dl_3dee5997347f422b8180";
export const url=new URL("../icons/lucid_1-bell-off.svg?v=fca9e6ee42af6b5858731bca2f288bfbef0c6161ddcf63ad068decd2c417c48c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
