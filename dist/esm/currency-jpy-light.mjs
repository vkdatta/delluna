export const name="currency-jpy-light";
export const id="dl_bb0c305be96e4f728859";
export const url=new URL("../icons/currency-jpy-light.svg?v=c348fc5110571050516e9e8dbbc91ca5479ab452f73ded8096b9eb360f91f47c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
