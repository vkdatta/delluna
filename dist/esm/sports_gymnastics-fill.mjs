export const name="sports_gymnastics-fill";
export const id="dl_128fab1aa3e4dae11c0a";
export const url=new URL("../icons/sports_gymnastics-fill.svg?v=659d85f1ff9a89fc540ef40ce6e3684f0d86e6f741dfd0001b4870a6ec0e6979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
