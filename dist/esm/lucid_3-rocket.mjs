export const name="lucid_3-rocket";
export const id="dl_cca799e75e2f4afcaa05";
export const url=new URL("../icons/lucid_3-rocket.svg?v=e2bbf60f64cd1142f7c62e49cc34486681d03d888313c011d0417701ec39513b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
