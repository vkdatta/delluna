export const name="thermometer-cold-bold";
export const id="dl_acc5b9e1fc58a14ce05d";
export const url=new URL("../icons/thermometer-cold-bold.svg?v=3128b1627c037a1e70bccfea47245f5b2bdb2271b3098d6e7c0fdf9a20e11d1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
