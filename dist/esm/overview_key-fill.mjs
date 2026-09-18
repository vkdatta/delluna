export const name="overview_key-fill";
export const id="dl_10f4b509a2be40d0802d";
export const url=new URL("../icons/O/overview_key-fill.svg?v=b685a23ed6b25c53a21044d5b6e3ac4d909b3e79e5f5c600eec449b27fb33b7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
