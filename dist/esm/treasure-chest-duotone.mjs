export const name="treasure-chest-duotone";
export const id="dl_a8b45e8df900441b85bb";
export const url=new URL("../icons/T/treasure-chest-duotone.svg?v=63f9097a206e06586e2c81b7e432e472b8337a958530248c6cc9163888096166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
