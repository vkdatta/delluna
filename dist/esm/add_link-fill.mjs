export const name="add_link-fill";
export const id="dl_16227e0ab8318ce87a40";
export const url=new URL("../icons/add_link-fill.svg?v=2b56e59d8664fccc8d4acddeb3c286d4aee9a84f77087095ca9e38d001df5832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
