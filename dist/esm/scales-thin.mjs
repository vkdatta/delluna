export const name="scales-thin";
export const id="dl_36cbee068ba22ef0431a";
export const url=new URL("../icons/scales-thin.svg?v=174dc87a91e1a28ee1f67913490fbf2e240d4e0a94f49f8f13f7ebbf878b2214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
