export const name="text_increase-fill";
export const id="dl_29c9951eb44aa6fac977";
export const url=new URL("../icons/text_increase-fill.svg?v=e843e2f10324c9a749dd2fffe6d27776022c4b6f38d5b40f1c2eacce6f9b03ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
