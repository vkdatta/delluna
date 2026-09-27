export const name="guitar-light";
export const id="dl_f341b97548c6438ba3a5";
export const url=new URL("../icons/guitar-light.svg?v=2fe986c97000da81308dc5270139194dfe30ec705553249fe4c8b3bf0e0635d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
