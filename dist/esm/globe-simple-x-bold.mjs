export const name="globe-simple-x-bold";
export const id="dl_9750187ea59d4da793fb";
export const url=new URL("../icons/globe-simple-x-bold.svg?v=6f49ef428f5390c2dbe4e1ddd0e43a39bcd8640d4448b17eff2abbd449216f57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
