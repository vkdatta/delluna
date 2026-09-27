export const name="article-bold";
export const id="dl_badbdfc11d154554904f";
export const url=new URL("../icons/article-bold.svg?v=670eaabbea2c8e24efbee17e11587616f6bb262dc0297442660afc01bc0be11e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
