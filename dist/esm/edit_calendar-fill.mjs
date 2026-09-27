export const name="edit_calendar-fill";
export const id="dl_aeeac8baf9f5056b0bc4";
export const url=new URL("../icons/edit_calendar-fill.svg?v=eaa9de0407a7c88e462a32d56f7086cde2b050adcc0329a5b4c6245bdf56edef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
