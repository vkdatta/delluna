export const name="outdoor_garden";
export const id="dl_0dd7797177f086a02ea5";
export const url=new URL("../icons/outdoor_garden.svg?v=547da25b91c53ed691067f8c75858056af816f21a33ec26f6c2c90c736e0ad1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
