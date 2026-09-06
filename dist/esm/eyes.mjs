export const name="eyes";
export const id="dl_b67225165f0a4b96be57";
export const url=new URL("../icons/eyes.svg?v=9344c58879f2e6f306c1e861c70b2fb3958fc318af7c657c28d7ad67e21909e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
