export const name="heart-straight-break-bold";
export const id="dl_e062ddaf380341d6aa8d";
export const url=new URL("../icons/heart-straight-break-bold.svg?v=865021768bab01adc9a24c6ec57f8a76654a07f3453816ee5279c87b364f4326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
