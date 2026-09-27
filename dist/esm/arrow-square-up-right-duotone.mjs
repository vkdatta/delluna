export const name="arrow-square-up-right-duotone";
export const id="dl_756d50f7b9dc430b9207";
export const url=new URL("../icons/arrow-square-up-right-duotone.svg?v=36f9c7eff68e2a997b343e5238311747eb65cf721a8ead83300c30e0e15e748a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
