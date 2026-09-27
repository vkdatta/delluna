export const name="upload-fill";
export const id="dl_26562d308633dcd8aace";
export const url=new URL("../icons/upload-fill.svg?v=2e0ef77de6a700eaa28a584a2f8e39270cf2b7d4ca7976af2181e6592d849165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
