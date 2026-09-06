export const name="cherries-bold";
export const id="dl_ced116e263d6491fa60a";
export const url=new URL("../icons/cherries-bold.svg?v=cfa8042fcfcc9d825899d28879754a412be41d3df8c0b8448e75146d34fad105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
