export const name="images-square-thin";
export const id="dl_327b279d48e541cd8ff7";
export const url=new URL("../icons/images-square-thin.svg?v=163d94314e379902f3a9c69cea9a1551c5e7fe98fe19e495b9224868ec1a6cdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
