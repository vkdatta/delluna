export const name="images";
export const id="dl_db34d54c84d44760b652";
export const url=new URL("../icons/images.svg?v=7e8e0035864a6cc3e0ea1e0441d073b582001b74c374939fd8ece6ff55101a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
