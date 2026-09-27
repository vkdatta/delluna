export const name="star-check";
export const id="dl_2d479755179b4b08b767";
export const url=new URL("../icons/star-check.svg?v=81318badd4c684e2a9d3fbdbf26d7c16b730c83b5c9e848d71d1bf8e3ea1698f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
