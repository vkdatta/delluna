export const name="light_mode_auto";
export const id="dl_507b47ea1ae16b5767d6";
export const url=new URL("../icons/light_mode_auto.svg?v=cc55bb16e23c7c9887153b5d6ca01f03eaa4b68d6ebf4ca5d3a0b34dcabbde32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
