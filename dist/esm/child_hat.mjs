export const name="child_hat";
export const id="dl_bde1ad38283e46f2bce6";
export const url=new URL("../icons/child_hat.svg?v=7d0a8a03b6115e4d99511c3188ad9cbaceeb17cebcb8bc61d4e014d313bbfa21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
