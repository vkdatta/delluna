export const name="enterprise_off";
export const id="dl_de893f8b739bdad23b31";
export const url=new URL("../icons/enterprise_off.svg?v=ebcc85f604945a4c870868b587ec4bc7607d469d815aa9e30992a98c1b535605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
