export const name="address-book-tabs-light";
export const id="dl_699ebe4b3c10472785ac";
export const url=new URL("../icons/address-book-tabs-light.svg?v=234f6c05250544e7337f9bfdddb5956e063fe68f61b9f77525ecbad485ffa319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
