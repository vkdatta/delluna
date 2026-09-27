export const name="yin-yang";
export const id="dl_844e354e0b642275f08a";
export const url=new URL("../icons/yin-yang.svg?v=dd304ecf219145a1d7d09568df263d22cbca26f8c69e3320a55c3c1fe98baecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
