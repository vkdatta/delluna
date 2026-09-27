export const name="roundabout_left-fill";
export const id="dl_bae93a7498820385ce24";
export const url=new URL("../icons/roundabout_left-fill.svg?v=57ded340177507ea9a703099fe5e86809d2874300af78eee6c156e5b611cb9ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
