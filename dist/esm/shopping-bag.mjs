export const name="shopping-bag";
export const id="dl_4504775d2cd897e55d56";
export const url=new URL("../icons/shopping-bag.svg?v=9707f2d5de999aec47aada97a9c179f6daf9fff84de9db4d7e921316b55bad64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
