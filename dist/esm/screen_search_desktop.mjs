export const name="screen_search_desktop";
export const id="dl_7ab0cb0f08a5e654fdea";
export const url=new URL("../icons/screen_search_desktop.svg?v=179dc8114edc65ad2dc75de1ec263db74c37fcad3151df2dba213b57711731ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
