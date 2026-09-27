export const name="avg_time-fill";
export const id="dl_d89699f209223a43acbe";
export const url=new URL("../icons/avg_time-fill.svg?v=5da5b64974bb385e36efedc4cdbed97ec04239b37080e1d0a4d79bec817b8b44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
