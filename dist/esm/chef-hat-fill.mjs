export const name="chef-hat-fill";
export const id="dl_75227c1f037145e49a61";
export const url=new URL("../icons/chef-hat-fill.svg?v=4aa5de24ce5b29e8f6cb19af0a7c61898eb5641d2764ba2c5780d4388d80a7b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
