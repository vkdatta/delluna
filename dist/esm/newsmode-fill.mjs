export const name="newsmode-fill";
export const id="dl_a8cdb89850c2dc8e1174";
export const url=new URL("../icons/newsmode-fill.svg?v=c90952959274ee9752728f249ac5ce476ebc72942240dcb6b663ced5017cdc9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
