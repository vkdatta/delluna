export const name="users-duotone";
export const id="dl_14ad24b11b2c116dd202";
export const url=new URL("../icons/users-duotone.svg?v=18c5e980bfc83a3c8f716ef8f79ef946acd03de462c18368205166012f04fbdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
