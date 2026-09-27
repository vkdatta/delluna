export const name="lucid_1-bell-plus";
export const id="dl_7a211dca4cae4856837d";
export const url=new URL("../icons/lucid_1-bell-plus.svg?v=78e50351a2968307f174e3193b44690b27688fdbd3abc11501372eee6ffb767d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
