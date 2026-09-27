export const name="storefront-bold";
export const id="dl_ee391dce244c9d96b750";
export const url=new URL("../icons/storefront-bold.svg?v=542251fa08f6c19f1fd2f64b478f9c63e83653e84706d60e8897b07d636fd953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
