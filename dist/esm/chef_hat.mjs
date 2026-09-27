export const name="chef_hat";
export const id="dl_4dd62c88d8c91b274fe4";
export const url=new URL("../icons/chef_hat.svg?v=c1832271293a1b8915df6036f1489281491b0f4c824cb9056e0351fa62be68f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
