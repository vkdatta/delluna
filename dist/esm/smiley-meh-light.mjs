export const name="smiley-meh-light";
export const id="dl_7b08f4824d1b527bfc98";
export const url=new URL("../icons/smiley-meh-light.svg?v=cb6f3e4f7c65d0951795e0692cf3415a8fb122f971eb1d4db042766841337563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
