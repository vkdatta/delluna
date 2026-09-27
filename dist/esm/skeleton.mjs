export const name="skeleton";
export const id="dl_6023d3e13ca95b839ab8";
export const url=new URL("../icons/skeleton.svg?v=9a6f5fe10fc395431edbd8925ec52faf341cfa88f693a622c4d808d8caa802fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
