export const name="gif";
export const id="dl_8f173b1e3b2445a2b635";
export const url=new URL("../icons/gif.svg?v=a56cbe92d652bc63c2f83c38b1f8a92a8979bd261cba66e32388907425eb5c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
