export const name="shopping-cart-duotone";
export const id="dl_d8d989cd89804d44a06c";
export const url=new URL("../icons/S/shopping-cart-duotone.svg?v=3d96cebc7e046dc071d2fe56e94d54d3784fe084e58e7f456857f1179320d76f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
