export const name="book_5";
export const id="dl_fdbb62160fdea99ddb56";
export const url=new URL("../icons/book_5.svg?v=b9f9d8c2c514665a0f632041b78a4528ccbd87c7a2183111fc0ad0d22982ed84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
