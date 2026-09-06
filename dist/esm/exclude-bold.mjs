export const name="exclude-bold";
export const id="dl_1fa9a1b614af4d98bee6";
export const url=new URL("../icons/exclude-bold.svg?v=78161c898508ea130a904765e7b5f7d6b755f36ec666023e1618de62c30b4ca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
