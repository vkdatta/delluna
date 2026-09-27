export const name="energy";
export const id="dl_057ee3811521a1cbe71a";
export const url=new URL("../icons/energy.svg?v=85a6f1937392821f5fe0315f861a735fa8458b6d9e004a525de0cfdfba3ca969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
