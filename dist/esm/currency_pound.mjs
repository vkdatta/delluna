export const name="currency_pound";
export const id="dl_aad9b73161b9e3971cfd";
export const url=new URL("../icons/currency_pound.svg?v=c8c8aab4986d38683e0bff79874bf7fca504b84d0f5dcf0845908b839284b35a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
