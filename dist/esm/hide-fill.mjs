export const name="hide-fill";
export const id="dl_c8be0a4b23f5c60c140d";
export const url=new URL("../icons/hide-fill.svg?v=cef54ae47cadfbcd4bfbe87b32eaf8a603480cbb88ee8b8b4bdca16136c52c6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
