export const name="shopping-bag-duotone";
export const id="dl_acd97d5149ff48b88488";
export const url=new URL("../icons/S/shopping-bag-duotone.svg?v=7c8666c1b779180724ed0536b926b8358e8cec579a91670fc8c3718b25e86776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
