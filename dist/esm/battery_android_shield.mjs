export const name="battery_android_shield";
export const id="dl_7d37f6be5e9d4fe2bffc";
export const url=new URL("../icons/battery_android_shield.svg?v=55ef29efd9cc15176ac2ffa8e1475803b58a88b70d5df8f8e17434aab90ca8c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
