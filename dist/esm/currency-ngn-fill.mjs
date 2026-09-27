export const name="currency-ngn-fill";
export const id="dl_3bbe62859d69453f8e22";
export const url=new URL("../icons/currency-ngn-fill.svg?v=7eade1b37dfd136695b63ec79237757dfaa851bce64617e4ad28b1c100a66517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
