export const name="mode_standby";
export const id="dl_4b8ac20620324c36ace1";
export const url=new URL("../icons/M/mode_standby.svg?v=f0b5a61365411d8b2492132648742a3676ea18cb0ed3910ae782ef35c9099813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
