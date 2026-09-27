export const name="sentiment_satisfied-fill";
export const id="dl_ad1e4a48c30e90f13c67";
export const url=new URL("../icons/sentiment_satisfied-fill.svg?v=c049cdc2c2b23dd06eb25a594c64322d5e006a5490ccae69b0927eccdef1eaa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
