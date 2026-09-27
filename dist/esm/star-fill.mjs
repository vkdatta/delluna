export const name="star-fill";
export const id="dl_928856c22173910e9afe";
export const url=new URL("../icons/star-fill.svg?v=0202b181bee0e231659053da67111a94495537198e4acf6db0ebe40a719c3535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
