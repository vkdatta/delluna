export const name="owl";
export const id="dl_7940d8552bfc4feebc49";
export const url=new URL("../icons/owl.svg?v=d599af1b8b2d8130b6c78aa88f361a840f30eb35027ff487f98a25ae85de6e31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
