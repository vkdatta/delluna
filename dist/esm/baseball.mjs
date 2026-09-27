export const name="baseball";
export const id="dl_c6c6c405fb764499917f";
export const url=new URL("../icons/baseball.svg?v=1f558e9a41ff7a6e9fa5fd696a845a83feb35325c2c242f3bd09eeaef1efd5c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
