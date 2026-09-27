export const name="moon";
export const id="dl_25d241a1733b4a86802c";
export const url=new URL("../icons/moon.svg?v=233a9e722704dcddb729a3511daccab37cdb6aab947f3003d71265424268a558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
