export const name="pulse-light";
export const id="dl_e1e7a3a679294a3f836a";
export const url=new URL("../icons/pulse-light.svg?v=947d28d0256d4d6f4785b21b22a4116bc2ef65cf8c1ee34c7c667e69b121b98c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
