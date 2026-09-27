export const name="shopping_bag";
export const id="dl_cc85745149a0c4a3cc08";
export const url=new URL("../icons/shopping_bag.svg?v=0e35b0d31b0ed6d5a586c38a056e77d55bb94aba3020c8339c8e49a283d88301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
