export const name="lucid_1-badge-russian-ruble";
export const id="dl_ad021f9314ed4189b150";
export const url=new URL("../icons/lucid_1-badge-russian-ruble.svg?v=ea113278429835441f72717638d6fc5d90c1486f25f54e97e7b016687497c58c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
