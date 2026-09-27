export const name="carry_on_bag_checked-fill";
export const id="dl_64a85be177a9c81c69bb";
export const url=new URL("../icons/carry_on_bag_checked-fill.svg?v=bce4a5fe73fa1b47a71a0aaeb8d2c2b2982268daefa5995c10a644c105d8e843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
