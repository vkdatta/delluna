export const name="shipping-container-bold";
export const id="dl_acc5a99a65d641b3b4f9";
export const url=new URL("../icons/S/shipping-container-bold.svg?v=2d2f23aba16487d2d7113a4c0c5cb722be1525e5af5be5e44c4bb5eb53b5f343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
