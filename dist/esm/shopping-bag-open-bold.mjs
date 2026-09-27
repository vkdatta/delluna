export const name="shopping-bag-open-bold";
export const id="dl_e0d4bdeabce2a50817df";
export const url=new URL("../icons/shopping-bag-open-bold.svg?v=2dcbe673a5313d23c9dcbd71305ac4d495c4291ceaae03f1eb1dbeca80f218e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
