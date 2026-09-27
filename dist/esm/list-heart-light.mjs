export const name="list-heart-light";
export const id="dl_8b17967d10df4972901a";
export const url=new URL("../icons/list-heart-light.svg?v=10953fb24a90cc9f8290904cf2ab7f7ce2f2351bcd83e782e32ffbe11fd8431e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
