export const name="location_chip";
export const id="dl_84e9f21f9f5e4d179e28";
export const url=new URL("../icons/L/location_chip.svg?v=583aa0abbbff73249ed163793add08e4de2020daa4e0e4acc4ddbbdc3e5c6024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
