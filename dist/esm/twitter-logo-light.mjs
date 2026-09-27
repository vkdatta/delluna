export const name="twitter-logo-light";
export const id="dl_a6dc6f0ae0b0e115c030";
export const url=new URL("../icons/twitter-logo-light.svg?v=a10062d76294f4d3af00e9fc191dd52441e15d23dec15c1fc632b458877d672d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
