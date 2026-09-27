export const name="lucid_3-message-square-heart";
export const id="dl_c5ca3c6cd98544eaa054";
export const url=new URL("../icons/lucid_3-message-square-heart.svg?v=9505253de3a9d3d82116ce6ba6893d92f2999687b62c9029fba92c782d5ff9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
