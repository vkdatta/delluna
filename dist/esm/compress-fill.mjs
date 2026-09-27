export const name="compress-fill";
export const id="dl_344587b5cc112224e0a0";
export const url=new URL("../icons/compress-fill.svg?v=3dfdb820dd82d48b9b1826259e910c316362bf159569a8e957e41eed3bcf615f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
