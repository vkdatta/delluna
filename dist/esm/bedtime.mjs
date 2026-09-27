export const name="bedtime";
export const id="dl_b0b466a9e0efeb4cea44";
export const url=new URL("../icons/bedtime.svg?v=b923366b54b135e9e6421e7aec529aa113f15f0a587f36f2aceacc7ef37b6a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
