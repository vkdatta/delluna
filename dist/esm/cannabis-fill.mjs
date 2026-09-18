export const name="cannabis-fill";
export const id="dl_ff5bec255be949c8b390";
export const url=new URL("../icons/cannabis-fill.svg?v=5a4b8267110d5cc1c1f22a30849a3ef272eb722496b3500a7984bfab87594b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
