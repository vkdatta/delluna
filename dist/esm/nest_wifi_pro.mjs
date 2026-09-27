export const name="nest_wifi_pro";
export const id="dl_20901e36c7c21013054b";
export const url=new URL("../icons/nest_wifi_pro.svg?v=e7aff0acf652a52bcbe3265b8fdcef4f59ab31d2cd85f8768508412f98c0b137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
