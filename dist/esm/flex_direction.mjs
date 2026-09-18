export const name="flex_direction";
export const id="dl_8810d779047640a5ab9f";
export const url=new URL("../icons/flex_direction.svg?v=53d7bc8f865ce94fee834d612950d7e9ecc6ae076945f40e2bd72e5e2a7d8215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
