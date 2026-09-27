export const name="cooking-fill";
export const id="dl_b2efaad3036b1f6e86a7";
export const url=new URL("../icons/cooking-fill.svg?v=1d1b13af528cf8fefdd5b3764dbe8caa13b2480a60962cacb03bacb36dad2804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
