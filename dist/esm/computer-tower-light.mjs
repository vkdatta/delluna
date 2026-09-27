export const name="computer-tower-light";
export const id="dl_f5eaf291ed6e49e6909b";
export const url=new URL("../icons/computer-tower-light.svg?v=2a8e3a585b099eed50b2d6dc344812046fb9e6dc378505178858cdd020eed46b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
