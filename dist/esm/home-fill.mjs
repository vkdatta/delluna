export const name="home-fill";
export const id="dl_b169941c914e33eec490";
export const url=new URL("../icons/home-fill.svg?v=9c136b2e09a1f0be1ff284f245ecf45fd9c9868c29679e7c4cf1d8cb9426fea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
