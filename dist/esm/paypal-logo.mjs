export const name="paypal-logo";
export const id="dl_592462a1f4674a2e8467";
export const url=new URL("../icons/paypal-logo.svg?v=279e5a241079f784c3edad6da183e1430d0dd9ddbb8850b8cfee79804032e662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
