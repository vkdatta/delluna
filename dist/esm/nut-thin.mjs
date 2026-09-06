export const name="nut-thin";
export const id="dl_d843e75d37e147339743";
export const url=new URL("../icons/nut-thin.svg?v=34af9654d2924ab556e258e78d61c70d0ea8005b9381eef902bda70549a6b74a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
