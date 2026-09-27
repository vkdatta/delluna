export const name="empty_dashboard";
export const id="dl_71e7fb553ff33d0d4e86";
export const url=new URL("../icons/empty_dashboard.svg?v=eb58ba6e57d6cd87d7ffc3f867fb9176a386f0d461b44598cf9f1007d92454e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
