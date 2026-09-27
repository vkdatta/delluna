export const name="compass-tool-duotone";
export const id="dl_3d8852d59ed74f42a65d";
export const url=new URL("../icons/compass-tool-duotone.svg?v=9c54c88c491edc1bb62409cd90b03c716c8ab509beafec2c71778a600bcb540a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
