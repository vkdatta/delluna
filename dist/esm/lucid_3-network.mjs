export const name="lucid_3-network";
export const id="dl_295e7bab9bdd4c1e8e43";
export const url=new URL("../icons/lucid_3-network.svg?v=bb199dc6a730704f4556d8a248b7b255606c1767ea2ae8af769ed35cbd43e890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
