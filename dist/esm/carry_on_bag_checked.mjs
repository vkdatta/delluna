export const name="carry_on_bag_checked";
export const id="dl_ed380d3b7338d9a98480";
export const url=new URL("../icons/carry_on_bag_checked.svg?v=229083b5b5229cdb97bec44df5429daa007b7acb4f4ed3499f3727a21df9ed46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
