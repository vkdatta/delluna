export const name="lock-key";
export const id="dl_07f1e3c1cfb6413486fb";
export const url=new URL("../icons/lock-key.svg?v=ecc16832196a3f0149abb0e33235e6592f1e0eff681cfb504e0a98be205c9f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
