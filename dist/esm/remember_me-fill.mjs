export const name="remember_me-fill";
export const id="dl_fb20bc0e12a64d8e5b0e";
export const url=new URL("../icons/remember_me-fill.svg?v=d540780ddb307fc8ab4ad61ad447d84937f1c57f339b4548eed1448991d2b6b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
