export const name="short_stay-fill";
export const id="dl_3895ef863b5dbfc54139";
export const url=new URL("../icons/short_stay-fill.svg?v=0dca83bcc8799723fc2d5d9dba7106b84b5cfa9cdafdb5033c1f4cd46ae7465b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
