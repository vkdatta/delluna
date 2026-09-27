export const name="tenancy";
export const id="dl_32b9af96f327671d77d1";
export const url=new URL("../icons/tenancy.svg?v=2531fb9caf35bc0b4335afefb78bc896e73b4e791c9b105c26d428c927ac6e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
