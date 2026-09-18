export const name="label_important";
export const id="dl_cfa5a39aeb694b0f8491";
export const url=new URL("../icons/label_important.svg?v=edbfc37cab4fc8fd831f603c27920a0bd2652331984113ec430b367622d9720f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
