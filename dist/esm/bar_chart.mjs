export const name="bar_chart";
export const id="dl_fd4a22eb8183717277a6";
export const url=new URL("../icons/material_symbols/bar_chart.svg?v=1bf3cc2065015140f80ff33f93d97886b664ebed494bc0eeb50e33dddcbb6478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
