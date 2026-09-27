export const name="top_panel_open";
export const id="dl_ed0fba509c32e859de5d";
export const url=new URL("../icons/top_panel_open.svg?v=139a457f980b31c1518cd9e745b45d42db4e9916222b485073429858ba64eb2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
