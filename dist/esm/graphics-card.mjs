export const name="graphics-card";
export const id="dl_37119241be3a496fbc77";
export const url=new URL("../icons/graphics-card.svg?v=9a0e26215cb330008d893927c8bee0e79fecd5f414366b13407b9f6f4744774a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
