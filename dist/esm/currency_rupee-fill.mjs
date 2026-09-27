export const name="currency_rupee-fill";
export const id="dl_2b2c53ebbeb3da2731a8";
export const url=new URL("../icons/currency_rupee-fill.svg?v=fbeefbe52815dfe6136bd9972ebef4fbc32cb9e4bfb11cab2f7fc8e19e6283aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
