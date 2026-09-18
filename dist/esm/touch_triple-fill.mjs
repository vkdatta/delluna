export const name="touch_triple-fill";
export const id="dl_724adec31b284bfdb126";
export const url=new URL("../icons/touch_triple-fill.svg?v=50af38e76beb758ce2fa3752f05c02e94390039c10c7c44b9fb516ec6766049e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
