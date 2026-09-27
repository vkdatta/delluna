export const name="subway-light";
export const id="dl_6abc34ef614db3f59114";
export const url=new URL("../icons/subway-light.svg?v=a35815c31f2f496ba514f35f8379addea8216bae0008a3b9b395d386305e5b53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
