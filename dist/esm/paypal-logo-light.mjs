export const name="paypal-logo-light";
export const id="dl_8169cabcdbc94c65bba6";
export const url=new URL("../icons/paypal-logo-light.svg?v=d5285eabd4ebf8cac284253bd20b93506780d8fe04e180651d3fe209cdc0189c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
