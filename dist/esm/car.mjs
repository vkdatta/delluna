export const name="car";
export const id="dl_8d5db58372514d1992bb";
export const url=new URL("../icons/car.svg?v=aaacc47bbe4252014a16d332d29c546caed6b75d875ccc9966fe59d96ae3eca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
