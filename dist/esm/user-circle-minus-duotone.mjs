export const name="user-circle-minus-duotone";
export const id="dl_c436c2efd77f9b118692";
export const url=new URL("../icons/user-circle-minus-duotone.svg?v=1abe086ecf7d5cfff80d067cb610bdeebec8586922067414eb568c29bc4827e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
