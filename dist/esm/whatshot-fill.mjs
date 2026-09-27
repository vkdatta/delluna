export const name="whatshot-fill";
export const id="dl_13d08469f4aa5b1f5116";
export const url=new URL("../icons/whatshot-fill.svg?v=b73060ea078e800096e43ffb3f432428b08ba8a3137d684b122023b41deb6ee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
