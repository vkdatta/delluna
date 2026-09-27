export const name="contactless-payment-duotone";
export const id="dl_216f21ce053a473793d3";
export const url=new URL("../icons/contactless-payment-duotone.svg?v=4f8b06d384d4e50b344f22f12bdf6afbc26dfa6fc5a0e5d4673de180e499bd9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
