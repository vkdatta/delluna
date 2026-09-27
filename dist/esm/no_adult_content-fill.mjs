export const name="no_adult_content-fill";
export const id="dl_d3b6130ed1e96fb7a0c4";
export const url=new URL("../icons/no_adult_content-fill.svg?v=e14d9ba1a052f2428837edaf179261d080ebd8a75296cac463036e715c84bf82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
