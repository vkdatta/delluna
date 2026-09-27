export const name="privacy_tip";
export const id="dl_a5be6bd513459069b74e";
export const url=new URL("../icons/privacy_tip.svg?v=fee30befe65467c2c18104b8ba42324646d2fc1ac82980327bf3be9bbbd166ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
