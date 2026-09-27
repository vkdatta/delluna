export const name="lucid_2-hammer";
export const id="dl_7e261ef9e1ab460da694";
export const url=new URL("../icons/lucid_2-hammer.svg?v=e868a72ea00b2ab123e2440d17c61d5535ed5730e350cb6cffb25e8adf577ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
