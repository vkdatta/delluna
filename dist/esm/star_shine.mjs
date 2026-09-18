export const name="star_shine";
export const id="dl_e12d76796bce480fa4a5";
export const url=new URL("../icons/star_shine.svg?v=d99132d100a7e225d3471df4ac6fe98a5bd13d14abc7b88b6ef17fff1222fa7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
