export const name="package-light";
export const id="dl_3216ff4e5d1240c38e0f";
export const url=new URL("../icons/package-light.svg?v=ac6d743007b632ff890340481bc91ad059af9a6cfb761981d8458f9fd56524b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
