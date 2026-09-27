export const name="arrow-square-right-thin";
export const id="dl_589564a109f24b5d9742";
export const url=new URL("../icons/arrow-square-right-thin.svg?v=055381bd327e18be38a2a09bbc0ee11922dc0deb7eaf9077786e5c7b3af76b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
