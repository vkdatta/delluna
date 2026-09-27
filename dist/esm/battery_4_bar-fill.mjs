export const name="battery_4_bar-fill";
export const id="dl_5f38cb12b05af5ef9ec1";
export const url=new URL("../icons/battery_4_bar-fill.svg?v=43d685f7efbc06f546468e0dbe3ba288941722728ed80fe4a4dfb07c1824f982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
