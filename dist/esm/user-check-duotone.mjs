export const name="user-check-duotone";
export const id="dl_cb85252e18dbe800f289";
export const url=new URL("../icons/user-check-duotone.svg?v=cb2ec9670a92cd9b7462945ee078397b2692da0d439a6c8889837bd4aacc095e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
