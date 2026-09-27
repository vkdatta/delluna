export const name="mp-fill";
export const id="dl_224c508ff48706753c83";
export const url=new URL("../icons/mp-fill.svg?v=4331f7f8f5ce138958b3a3b89dc87088ce9837dc3c0b7339eb0c9d04e3c41086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
