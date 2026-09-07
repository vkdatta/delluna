export const name="bell-z-bold";
export const id="dl_25afe6de854047b88419";
export const url=new URL("../icons/bell-z-bold.svg?v=f2cafb15cc9f30317a3bbabce41b594fca9f7e4ab25740578884255ca349c981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
