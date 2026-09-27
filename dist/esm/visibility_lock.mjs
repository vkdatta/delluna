export const name="visibility_lock";
export const id="dl_e6cabc560701483357ad";
export const url=new URL("../icons/visibility_lock.svg?v=14482b50ddd0496ba61ebf6abd68e1517f57d2915fbbc190fc9667ec8062d0c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
