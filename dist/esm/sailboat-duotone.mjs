export const name="sailboat-duotone";
export const id="dl_60cab82be8841a818ab0";
export const url=new URL("../icons/sailboat-duotone.svg?v=eb290fd8bd7c3b72a10c41cbec5971da038da211c58efee46f9b1265be0ebc3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
