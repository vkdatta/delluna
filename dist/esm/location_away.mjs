export const name="location_away";
export const id="dl_e085f5a2730445bf8e53";
export const url=new URL("../icons/location_away.svg?v=b97e4079580e7076440cd827ce460c6ec867de9e348b8f430c21dabe0fb0a274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
