export const name="lucid_3-message-square-text";
export const id="dl_ed0bf7c05b22459fa05e";
export const url=new URL("../icons/lucid_3-message-square-text.svg?v=67a0d1dbffaf15f51e45d75e12579a72290b733048ea9bb2f21e749fc8541925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
