export const name="user-circle-gear-bold";
export const id="dl_c949378bf9488f4e572a";
export const url=new URL("../icons/user-circle-gear-bold.svg?v=892df814e739802fd165b593b0ec630853ac6109d80d0df19f058266d1a76ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
