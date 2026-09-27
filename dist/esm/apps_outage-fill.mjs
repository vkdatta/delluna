export const name="apps_outage-fill";
export const id="dl_8d6e3bccd5708a186dd7";
export const url=new URL("../icons/apps_outage-fill.svg?v=b0b7212c73071d100f71bf6c4276fc160a9ed3c0c21c0358228e47325ced3ac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
