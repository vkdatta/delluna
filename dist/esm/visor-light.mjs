export const name="visor-light";
export const id="dl_ed5244d8176c7be8ed86";
export const url=new URL("../icons/visor-light.svg?v=e0e6e4bd645ca8a0d0f0633114e46cb5a5397c1ac977e87bf9fb9938bc1ba846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
