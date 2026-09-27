export const name="rss-simple-bold";
export const id="dl_2c271069d6154853a0ad";
export const url=new URL("../icons/rss-simple-bold.svg?v=27441c42e4a4d2ddd7aa3d651333ddfac676dc03433f44232f612ca26629faa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
