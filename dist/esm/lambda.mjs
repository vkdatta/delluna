export const name="lambda";
export const id="dl_fd255b583b2245198901";
export const url=new URL("../icons/lambda.svg?v=c7cbe72916206b6b087a9c8c15dac7246e5db3194768eb3531737614ccd76ab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
