export const name="lucid_3-shopping-cart";
export const id="dl_56899e4c8e13428ab511";
export const url=new URL("../icons/lucid_3-shopping-cart.svg?v=b56d7d258096608ee5135f02afbc707ac60e02255039948f222354efa9041cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
