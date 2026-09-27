export const name="sheets_rtl-fill";
export const id="dl_94120658dfe832564f34";
export const url=new URL("../icons/sheets_rtl-fill.svg?v=6884a552a27045a9cbece23052367de4dde111b8630b847f0a332171c565d55d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
