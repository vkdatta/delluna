export const name="currency-rub";
export const id="dl_f1eea9876b954e04bee8";
export const url=new URL("../icons/currency-rub.svg?v=51e4feebf7639d6221bd3fb843c1ed12142f90a1ca2ab3216c3c5cbb04c3bbfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
