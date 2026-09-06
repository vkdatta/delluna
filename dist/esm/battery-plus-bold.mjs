export const name="battery-plus-bold";
export const id="dl_cc0eedf384c54d8789d0";
export const url=new URL("../icons/battery-plus-bold.svg?v=9093d76c7c234731f03637b935fb017191d0e0dd92e99ae14b2893b34712ed36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
