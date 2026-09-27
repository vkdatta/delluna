export const name="report-fill";
export const id="dl_603ff8d5fadaa8ddb4e4";
export const url=new URL("../icons/report-fill.svg?v=c52ef82d7192731bbe58ec6bbd6f802f535c9e00384735a5e16873ca9c95e051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
