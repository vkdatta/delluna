export const name="approximate-equals-thin";
export const id="dl_0d2522487d124d5ebd3f";
export const url=new URL("../icons/approximate-equals-thin.svg?v=a5ef3908d976338216ad05fd9e7e183afcde14b25a439ef04943f6d821c9a470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
