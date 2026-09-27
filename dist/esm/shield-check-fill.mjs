export const name="shield-check-fill";
export const id="dl_431de31909443ac6145d";
export const url=new URL("../icons/shield-check-fill.svg?v=f0af9d0a5b942bd40c71a91f87b2c8fdc768f7ebf1f09cacfb526be1b0d5ecb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
