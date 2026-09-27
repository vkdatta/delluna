export const name="blinds_closed-fill";
export const id="dl_a86e3aaf8e1999dc41c9";
export const url=new URL("../icons/blinds_closed-fill.svg?v=0881675d57b51afe8332042bdae1c901dcd9f7443e08b33dbe4edc5baeb9876c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
