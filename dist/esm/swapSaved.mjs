export const name="swapSaved";
export const id="dl_7179b66d249c52f9c867";
export const url=new URL("../icons/swapSaved.svg?v=69437618bc6801fca32289f6ab6cd309690adda02e32cc4efa361d6d635531ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
