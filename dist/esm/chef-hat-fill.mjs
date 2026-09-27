export const name="chef-hat-fill";
export const id="dl_75227c1f037145e49a61";
export const url=new URL("../icons/chef-hat-fill.svg?v=6a42f9571de2d8b29a8dcf6dfebe8cced5ef606ee6706e71d541f37f77d7fbb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
