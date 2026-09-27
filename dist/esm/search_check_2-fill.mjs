export const name="search_check_2-fill";
export const id="dl_d6d933bc4eb1eca36df8";
export const url=new URL("../icons/search_check_2-fill.svg?v=f3c3a0452c6851a6b54f93c39382665fafac18fd392b6432854bc81c9b40b4f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
