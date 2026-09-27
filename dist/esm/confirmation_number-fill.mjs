export const name="confirmation_number-fill";
export const id="dl_36077d5a4a257b9ade81";
export const url=new URL("../icons/confirmation_number-fill.svg?v=d48bb3d9a91df334df67713cc99a7af500620fd2b581a04b41079a1ccbad6a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
