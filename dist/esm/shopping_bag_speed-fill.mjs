export const name="shopping_bag_speed-fill";
export const id="dl_2014f5ac16031d9b2e90";
export const url=new URL("../icons/shopping_bag_speed-fill.svg?v=8aa2918045164c3dc68c1fcf6c753d61f4bb55032df66851610115f2dfd56398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
