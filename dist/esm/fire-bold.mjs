export const name="fire-bold";
export const id="dl_e25fab08435a4e1d95b2";
export const url=new URL("../icons/fire-bold.svg?v=7d37dc4dd2914e7b064eec08ea44f15929a8f78aa25f68b02bcc4e531ae74be2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
