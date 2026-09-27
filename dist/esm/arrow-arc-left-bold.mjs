export const name="arrow-arc-left-bold";
export const id="dl_de8b282338884b3490cd";
export const url=new URL("../icons/arrow-arc-left-bold.svg?v=0d362ef53890ca0d08b4441bb8f06648534d45bc725a866651cb5835b7c5c212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
