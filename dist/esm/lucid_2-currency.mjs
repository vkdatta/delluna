export const name="lucid_2-currency";
export const id="dl_4d049a85922745c0b611";
export const url=new URL("../icons/lucid_2-currency.svg?v=a0365dceea6a155e8d318fd2957087d797da7b712c2f4599b7a4852a8729850e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
