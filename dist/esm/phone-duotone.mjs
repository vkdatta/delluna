export const name="phone-duotone";
export const id="dl_7affc38968d148808b95";
export const url=new URL("../icons/phone-duotone.svg?v=9fe2afc9a3e387300640fb9a83aa8bed793882301780ae247cc5cb514cfb730a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
