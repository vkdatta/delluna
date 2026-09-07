export const name="shopping-cart-simple-thin";
export const id="dl_ea7fa1c52ea34bc186b3";
export const url=new URL("../icons/S/shopping-cart-simple-thin.svg?v=8d2cc8477b1f6b059d1f0fcf916b72e849ac40ce3ce40a1c1589469fa7ca43fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
