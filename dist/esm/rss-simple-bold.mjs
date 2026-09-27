export const name="rss-simple-bold";
export const id="dl_2c271069d6154853a0ad";
export const url=new URL("../icons/rss-simple-bold.svg?v=65bbc79b5e57ee4c80139b70578c1e29f7a12789a4c4a8ce77bdf66dee5dc034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
