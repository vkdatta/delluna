export const name="brightness_empty";
export const id="dl_1db9a7bb7a5c49569446";
export const url=new URL("../icons/B/brightness_empty.svg?v=6b0ae930d71b27273faf96c82f7efefc8cd2bcb0fa82d1a2bdab809143dcdde6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
