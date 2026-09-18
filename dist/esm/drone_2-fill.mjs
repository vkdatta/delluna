export const name="drone_2-fill";
export const id="dl_34a774930579482b940b";
export const url=new URL("../icons/drone_2-fill.svg?v=74965b6ccd89a8a1dc53f4bddc129ec0206034b00bb27c508b2949324fdd86dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
