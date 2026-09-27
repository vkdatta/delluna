export const name="lucid_3-replace";
export const id="dl_47a486966a144f899f10";
export const url=new URL("../icons/lucid_3-replace.svg?v=dd2ca01d3e45e370f81f8d2ac8fe6bc8c7c8008e3be371ca48d1f18f516373a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
