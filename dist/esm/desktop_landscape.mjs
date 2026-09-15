export const name="desktop_landscape";
export const id="dl_75782f26dd4548018792";
export const url=new URL("../icons/D/desktop_landscape.svg?v=b1240c6d6f81426e4ae31762e56bed1c08beeed273a26ba0ee1a751190680bc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
