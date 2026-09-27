export const name="lucid_2-heading-2";
export const id="dl_5ca53fae7919489c9d80";
export const url=new URL("../icons/lucid_2-heading-2.svg?v=2305b3f0c7317285e05851ed42b979102b0a63ef0c94ffe243e7947348262fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
