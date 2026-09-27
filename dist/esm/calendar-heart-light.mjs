export const name="calendar-heart-light";
export const id="dl_2a6763c1b7b24106bf86";
export const url=new URL("../icons/calendar-heart-light.svg?v=fd930ab78a8852810a8cf4b3314d9a242ae6a01e951ca8c632c7c1b87e72aae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
