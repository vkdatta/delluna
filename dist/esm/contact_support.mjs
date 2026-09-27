export const name="contact_support";
export const id="dl_9ed70236af72ed412e81";
export const url=new URL("../icons/contact_support.svg?v=6acd607f888330d95a66ec72f12f49904dccf8844808c76e03fd9b0c821602d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
