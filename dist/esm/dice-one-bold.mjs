export const name="dice-one-bold";
export const id="dl_93047aac7e17434c9664";
export const url=new URL("../icons/dice-one-bold.svg?v=cfcf68b5d3f8202b76b0563ca5412a90c2145dc6e0df8a441992fcb3e7536675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
