export const name="clear_all";
export const id="dl_b7f4f6e685a6d9c721a4";
export const url=new URL("../icons/clear_all.svg?v=55074c0e2164368aa9ad08cf5ec3a5b8c6b6b80a4ca29ce9f77e3abbbe491b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
