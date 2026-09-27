export const name="lucid_3-rotate-cw-fading-clock";
export const id="dl_ab26aead018649e9b04f";
export const url=new URL("../icons/lucid_3-rotate-cw-fading-clock.svg?v=76aa6e86e32d36c599cb3639ebce0cb97372545d9bc99c69c390a00426cbccfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
