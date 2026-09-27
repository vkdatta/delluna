export const name="house_with_shield";
export const id="dl_873746e3cb5b49358b51";
export const url=new URL("../icons/house_with_shield.svg?v=4e3e891bc597f00dd5d870e6e2f195a7b4126d9d27aba721b6718e487e4a2f66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
