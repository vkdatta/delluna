export const name="lucid_3-square-arrow-up-right";
export const id="dl_af432c267a984ab4ba3f";
export const url=new URL("../icons/lucid_3-square-arrow-up-right.svg?v=be8b874923cc3c25bd32ae606bed6d1c9c1ffd68f76432e099809c4496640d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
