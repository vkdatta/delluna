export const name="universal_currency_alt-fill";
export const id="dl_93f2f629d110aeb35d4e";
export const url=new URL("../icons/universal_currency_alt-fill.svg?v=0299efb6a66c2e2f7dbbbc6fd3cba1eae29c635952d0b578e285622563abac43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
