export const name="detective";
export const id="dl_53b25138fe55473ba84f";
export const url=new URL("../icons/detective.svg?v=eb03a1f7d1536f8250a98fc091aa2e556fccfe48c60595835b87d3ecafbb6d15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
