export const name="lucid_1-angle";
export const id="dl_245d6e9f0e8a45e88d4b";
export const url=new URL("../icons/lucid_1-angle.svg?v=890fd1ba17ebce4d89144908fa34bd0c16d0f25463efb51bd30c5d53b2ab1232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
