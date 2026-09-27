export const name="multiple_stop";
export const id="dl_98b60414723d41bd9cb3";
export const url=new URL("../icons/multiple_stop.svg?v=76cdeaf070055f71e8a29f3b8585981f9027a96da26edd5f4b20e0d03e740179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
