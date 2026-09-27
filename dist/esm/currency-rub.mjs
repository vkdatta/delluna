export const name="currency-rub";
export const id="dl_f1eea9876b954e04bee8";
export const url=new URL("../icons/currency-rub.svg?v=24023babecb927fa6fa69e2d21ac8ef22d5c596bcd457f8fb81a5f61b575662e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
