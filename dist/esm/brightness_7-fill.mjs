export const name="brightness_7-fill";
export const id="dl_f64175c75ec779a2970b";
export const url=new URL("../icons/brightness_7-fill.svg?v=d57c6417f46bafb999098919f56a79308937d7e51665b5c4112bdd21b367296a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
