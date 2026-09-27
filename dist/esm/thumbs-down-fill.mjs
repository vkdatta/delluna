export const name="thumbs-down-fill";
export const id="dl_7589bd7aec96b153eeca";
export const url=new URL("../icons/thumbs-down-fill.svg?v=4c2020969d799c25f909318a5a124b2a30c495e04b91fe960ba1fff4c786ebf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
