export const name="arrow-down-left-light";
export const id="dl_6701193f0e1f448bb552";
export const url=new URL("../icons/arrow-down-left-light.svg?v=ade6d690687f9f275bc28d625fbdceaeb63ebdbfa21af3155ec5a8b7351b73d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
