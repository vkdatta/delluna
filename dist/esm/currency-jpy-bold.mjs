export const name="currency-jpy-bold";
export const id="dl_ab2777dd1ed54e08aa89";
export const url=new URL("../icons/currency-jpy-bold.svg?v=fd439847fdbfb4a3e5d11fcb52dade220e71f487bc6cfcc28413aa34e7c63cc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
