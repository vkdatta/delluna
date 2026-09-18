export const name="health_and_beauty-fill";
export const id="dl_c7a05981a42d413bb463";
export const url=new URL("../icons/H/health_and_beauty-fill.svg?v=ffd5c682c65cc6b9b82fdae39585d93bb0f30f2c0b16b2078ec5188ea2599a19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
