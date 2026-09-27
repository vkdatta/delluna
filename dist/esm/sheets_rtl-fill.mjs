export const name="sheets_rtl-fill";
export const id="dl_3cf1bfe2c36b37bb90dd";
export const url=new URL("../icons/sheets_rtl-fill.svg?v=da1df1d9d336df928db5724041387c654bb21ef701252c3b76d1b545b0008d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
