export const name="zodiac-sagittarius";
export const id="dl_312f89347c7644819dcf";
export const url=new URL("../icons/zodiac-sagittarius.svg?v=0cbbf35fd5238c9894aa994cb704e409421a375aa93908a903bc4f87c1514302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
