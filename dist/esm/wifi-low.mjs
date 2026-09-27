export const name="wifi-low";
export const id="dl_77365af9b57b81543e4a";
export const url=new URL("../icons/wifi-low.svg?v=e2de2a1a536bed05cd4c6cfbef40ba064883f3aa9897f7428a856330f2b5e9bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
