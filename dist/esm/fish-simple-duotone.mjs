export const name="fish-simple-duotone";
export const id="dl_67053b0aa725421f8e78";
export const url=new URL("../icons/fish-simple-duotone.svg?v=bf6946870987ed1102ff02e37aa01805c2ff666088b3f0341830a0068c99413c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
