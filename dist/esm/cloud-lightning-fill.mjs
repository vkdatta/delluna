export const name="cloud-lightning-fill";
export const id="dl_2d19854aab0941b2a590";
export const url=new URL("../icons/cloud-lightning-fill.svg?v=2c3606abaa9b2f93804c4f8cb4baa81715e24693335613d8e7d9997cc76f863e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
