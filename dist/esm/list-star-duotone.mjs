export const name="list-star-duotone";
export const id="dl_da4666a0d6a54fb7883d";
export const url=new URL("../icons/list-star-duotone.svg?v=1ad41be0f57f1496d1d2d728209d97b701178d9c882b14b0e27ac77ccef1eb5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
