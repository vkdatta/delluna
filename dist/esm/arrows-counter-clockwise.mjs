export const name="arrows-counter-clockwise";
export const id="dl_46dd0d84d4014b85af01";
export const url=new URL("../icons/arrows-counter-clockwise.svg?v=d2e4f4395b059283850a4ba61c24c7a338b9c4bc1863b8718b2cf2427d1ce48b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
