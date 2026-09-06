export const name="lucid_2-image-off";
export const id="dl_387ec51e79c04a178b24";
export const url=new URL("../icons/lucid_2-image-off.svg?v=f29d18e66a59d2c8394d5f46f6ce3766a316f5e181c18b070fce13cefbd65817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
