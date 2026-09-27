export const name="trademark-registered-light";
export const id="dl_c11fc2b7a0c0bdd9bf68";
export const url=new URL("../icons/trademark-registered-light.svg?v=23d140b348c38cab4bc795c0cf9dcc7ddf5c30ee0dc9db9e339dd730d0619403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
