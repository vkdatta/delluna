export const name="lucid_3-receipt-cent";
export const id="dl_f38228bd3b9946199386";
export const url=new URL("../icons/lucid_3-receipt-cent.svg?v=3c2137d6e85580c77f3cffce14ce2e742447cffce3a35eb393ae189f9fe9a58d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
