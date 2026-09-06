export const name="brackets-round-bold";
export const id="dl_e0968f86a1d84786a75f";
export const url=new URL("../icons/brackets-round-bold.svg?v=9a75af21cee123bdc48c4ab50d7535250a3e8b27e2bb32d06a629e6559cf006b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
