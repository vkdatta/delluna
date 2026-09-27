export const name="lucid_3-square-arrow-up-right";
export const id="dl_af432c267a984ab4ba3f";
export const url=new URL("../icons/lucid_3-square-arrow-up-right.svg?v=9ccdf0f699b4cb036117ead029eb29c63e4bb2d92d5c5936e318d4afb87e10c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
