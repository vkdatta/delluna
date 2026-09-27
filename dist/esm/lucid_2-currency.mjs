export const name="lucid_2-currency";
export const id="dl_4d049a85922745c0b611";
export const url=new URL("../icons/lucid_2-currency.svg?v=eedcd7284c788802bfb9f36547107d629e86fc777650086794623aa4efeff9f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
