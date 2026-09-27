export const name="wave-triangle-fill";
export const id="dl_99f5d1b4a53429336b04";
export const url=new URL("../icons/wave-triangle-fill.svg?v=435329c8098b4c68b4191edaeac7d46599cf22206d9d76ceeea2f68771ada132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
