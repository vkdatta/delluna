export const name="dots-six-vertical-duotone";
export const id="dl_450d0dbff1fc45e3b923";
export const url=new URL("../icons/dots-six-vertical-duotone.svg?v=ba5b0f14beeb2667a4f4e883a5953f1cdf839730dce0ef62938c07182dc9be68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
