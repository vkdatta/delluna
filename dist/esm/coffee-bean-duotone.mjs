export const name="coffee-bean-duotone";
export const id="dl_c58c48c9041d4aff953b";
export const url=new URL("../icons/coffee-bean-duotone.svg?v=9d038acaa48c56d9ccf82a7b6ef9aae8fb7b8c97389b056ecbeff990c9c2f75f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
