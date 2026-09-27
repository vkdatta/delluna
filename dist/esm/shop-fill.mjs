export const name="shop-fill";
export const id="dl_4f4af1d0e78f9bb22ceb";
export const url=new URL("../icons/shop-fill.svg?v=d45428296170fc744e6586ac3bc493e5afaf93a707003cadeb20ee89e132e4e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
