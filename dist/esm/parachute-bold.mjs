export const name="parachute-bold";
export const id="dl_829eabb4fb0f449eb7fb";
export const url=new URL("../icons/parachute-bold.svg?v=debeb862f92479f17353ea235a050c781249f41fe7af07245832e23c51868d7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
