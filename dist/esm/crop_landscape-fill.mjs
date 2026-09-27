export const name="crop_landscape-fill";
export const id="dl_d8d623dbfc202f4eb07e";
export const url=new URL("../icons/crop_landscape-fill.svg?v=86598df199984a43855c401223d6d8ed7db81f59cd08b821c369fd818e88cea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
