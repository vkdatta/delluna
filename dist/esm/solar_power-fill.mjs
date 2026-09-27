export const name="solar_power-fill";
export const id="dl_8e368824902ad2c692c2";
export const url=new URL("../icons/solar_power-fill.svg?v=df755d447c9d2672577ab17d0e2642c7702e9efeee5e2b4dc434b465ebc87668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
