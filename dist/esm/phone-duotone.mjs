export const name="phone-duotone";
export const id="dl_7affc38968d148808b95";
export const url=new URL("../icons/phone-duotone.svg?v=f5713227a14ebb438c9b04e3cefaa9f4ba71626f5228afe329d7b640a38cc877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
