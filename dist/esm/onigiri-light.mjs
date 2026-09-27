export const name="onigiri-light";
export const id="dl_263d4f1402634b34b62e";
export const url=new URL("../icons/onigiri-light.svg?v=bcd5b0cad0d685b4a7090c2dc0efba1f219946b204149f29f11737b324868e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
