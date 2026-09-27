export const name="sword-light";
export const id="dl_89ae87b1dfd2687a8da8";
export const url=new URL("../icons/sword-light.svg?v=d9ca26bb975e209ecdc39f6fa0fdc64649ffda0670168e350fe53e6a9ae5e507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
