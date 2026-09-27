export const name="contactless-payment";
export const id="dl_0b30e8f3aadc47019371";
export const url=new URL("../icons/contactless-payment.svg?v=faca6097ccc19baf7f06da696d25065987d4778c561d6a5548df6ebf5a096c5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
