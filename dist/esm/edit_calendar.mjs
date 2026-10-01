export const name="edit_calendar";
export const id="dl_362c819793f0f1001908";
export const url=new URL("../icons/edit_calendar.svg?v=e40171e8cf0500479b73d9d16030a986a2e74c9bc0ae750d2b7f55808fa1d35d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
