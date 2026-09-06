export const name="pinterest-logo-bold";
export const id="dl_6facd3cd829b4df0a586";
export const url=new URL("../icons/pinterest-logo-bold.svg?v=2579b789245de62473b55d38cd8eed58046824e386621c891b3fbc17b353ccf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
