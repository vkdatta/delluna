export const name="lock-simple-open-fill";
export const id="dl_850e4796b5d847c0bc0c";
export const url=new URL("../icons/lock-simple-open-fill.svg?v=dee31fb4c470e565114ae46ab5c4d6dd9c3ddbc3ccd585d170102b29c6ebf1ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
