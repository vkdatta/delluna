export const name="houseboat-fill";
export const id="dl_fe4f9be4ce6e4459bca4";
export const url=new URL("../icons/H/houseboat-fill.svg?v=1762bac28a7a7753053a19f577e98f88a4e8d70046476a7a7e8bb07f1202008d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
