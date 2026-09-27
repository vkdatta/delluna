export const name="money-wavy";
export const id="dl_ec04d68d037b4ea19f78";
export const url=new URL("../icons/money-wavy.svg?v=f8466c44094cc1ea2032d6561726e89e024a36c046aa2b7d9621a8d2c4a2ceb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
