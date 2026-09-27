export const name="sentiment_calm-fill";
export const id="dl_5cea057e41ceaa627cc3";
export const url=new URL("../icons/sentiment_calm-fill.svg?v=41a5cd5b3d5f6e98b8b0cc2b766629faeb967b3b662bb786d18e3924b88a699e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
