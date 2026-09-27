export const name="lucid_3-rotate-cw-fading-clock";
export const id="dl_ab26aead018649e9b04f";
export const url=new URL("../icons/lucid_3-rotate-cw-fading-clock.svg?v=231ddbfc0807e48d88e992ce3f01b58e7e02aa62c21cba54c5cb92305db59530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
