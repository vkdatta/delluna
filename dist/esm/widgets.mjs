export const name="widgets";
export const id="dl_6d64b3420c8e48c69a3e";
export const url=new URL("../icons/W/widgets.svg?v=9ec5112bf55b63a870df77805cc24277963310f19b384f679303a6216dcfebc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
