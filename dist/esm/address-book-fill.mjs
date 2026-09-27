export const name="address-book-fill";
export const id="dl_18bf62fd003949968266";
export const url=new URL("../icons/address-book-fill.svg?v=1f887f9e4c152e6f57539a811a7904888b085bbd6a5a2642b9b1d50ae0f36636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
