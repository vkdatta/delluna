export const name="egg-thin";
export const id="dl_bf4f193b47aa4ae1ad74";
export const url=new URL("../icons/egg-thin.svg?v=9427fb4b0ccd9c0fcf239299825741ed8e6c90a9f3749766063f506b36e9b055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
