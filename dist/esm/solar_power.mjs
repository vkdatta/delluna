export const name="solar_power";
export const id="dl_7c7235b081efe0288557";
export const url=new URL("../icons/solar_power.svg?v=5c7c8b4d9f3fe9f4e968f69e7f795db0dc6a92f9fce804cb67b41c87663ef7ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
