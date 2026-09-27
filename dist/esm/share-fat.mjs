export const name="share-fat";
export const id="dl_e09b3ea2062a58c471b1";
export const url=new URL("../icons/share-fat.svg?v=23c1519547be475bba9fb90ef387969b8777f3dd8f0416024e3bd57fded885a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
