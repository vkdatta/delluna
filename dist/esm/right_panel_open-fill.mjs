export const name="right_panel_open-fill";
export const id="dl_7b7a6d80b4c64726ac94";
export const url=new URL("../icons/right_panel_open-fill.svg?v=ec369facba14356a741da08da40084c2f85ab96403dfac8e7ddbb3a68f357917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
