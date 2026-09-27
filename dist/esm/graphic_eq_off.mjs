export const name="graphic_eq_off";
export const id="dl_bdcf54ec14c70264844e";
export const url=new URL("../icons/graphic_eq_off.svg?v=d9805639d65e2d31c377e68c3f68e52f65e46ddf2d6d27dba703d906de85518a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
