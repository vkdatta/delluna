export const name="lightning-light";
export const id="dl_3a7092f378a24289952a";
export const url=new URL("../icons/lightning-light.svg?v=fd7d6084635ba1ba9143e053aae3117a89a9e37505e453068e471a1bde11c0de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
