export const name="currency_rupee-fill";
export const id="dl_2d277c5e5f2545b89a99";
export const url=new URL("../icons/C/currency_rupee-fill.svg?v=9435dd5b09c085dc3c955f38f429a05f8991d21e492f876ac370956e29a6dcfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
