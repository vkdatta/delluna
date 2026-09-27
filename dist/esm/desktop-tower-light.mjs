export const name="desktop-tower-light";
export const id="dl_7fcd89e826134a04976a";
export const url=new URL("../icons/desktop-tower-light.svg?v=83ecab63f740bcf89911e1d90a3add006afcd7820df212402836a97621025c5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
