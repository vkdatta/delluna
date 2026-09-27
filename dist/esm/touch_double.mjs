export const name="touch_double";
export const id="dl_90bbb040218434b60f7b";
export const url=new URL("../icons/touch_double.svg?v=8aa7335f05fd3bc1fa7bca526cc9aa96baa906e9bb0efd9f619a8b2f0d32af30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
