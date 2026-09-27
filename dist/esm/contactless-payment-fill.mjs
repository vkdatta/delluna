export const name="contactless-payment-fill";
export const id="dl_40f9edbad5934e0da3dc";
export const url=new URL("../icons/contactless-payment-fill.svg?v=08e7e53e55a80a38f3c987d1340722d6a16d46afc6af5dc2d063bd2c15d218bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
