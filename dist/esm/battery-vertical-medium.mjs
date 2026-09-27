export const name="battery-vertical-medium";
export const id="dl_3776d2ed125b488484cb";
export const url=new URL("../icons/battery-vertical-medium.svg?v=832813277e2e1331af3412fc92bb3390a8574e05457ee3756a3b18fbce7793df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
