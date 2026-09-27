export const name="digital_out_of_home-fill";
export const id="dl_abe66204e06fbce9be67";
export const url=new URL("../icons/digital_out_of_home-fill.svg?v=ef5b6d881e316d86411af94d299707a8245087881752a6e9f5a5e073498f2a08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
