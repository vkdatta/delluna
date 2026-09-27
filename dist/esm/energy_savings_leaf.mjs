export const name="energy_savings_leaf";
export const id="dl_6881af779bd75f1236bd";
export const url=new URL("../icons/energy_savings_leaf.svg?v=b191d218899f743a6efdc5d6f03d8d9f85204990efb129c97931910b1bc6c306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
