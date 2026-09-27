export const name="arrow_cool_down";
export const id="dl_c90ef0d8cf543eef1f71";
export const url=new URL("../icons/arrow_cool_down.svg?v=91316bd6464325711f0811ff1f54e9a05f389863822168c5cd34d7d5a7f6c93a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
