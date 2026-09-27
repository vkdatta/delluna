export const name="square-logo-light";
export const id="dl_670d8bd81832ec4622d1";
export const url=new URL("../icons/square-logo-light.svg?v=2fa73fa7bf822d799fd64ab133cc1f2adc28c7204bf439133adfb87c5bd59b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
