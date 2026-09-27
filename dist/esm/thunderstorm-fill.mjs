export const name="thunderstorm-fill";
export const id="dl_306750fa5bec99c9245f";
export const url=new URL("../icons/thunderstorm-fill.svg?v=96c715c46fd3c359262558343af8dc6a49e25facdc3ca3330812cf438a4d39e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
