export const name="paypal-logo-bold";
export const id="dl_c2783a34f1c24ba190bb";
export const url=new URL("../icons/paypal-logo-bold.svg?v=a7d325114b69a35dde2c9f5db2058180bae8a43b81a544b27dfb79675a29684c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
