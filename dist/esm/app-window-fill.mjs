export const name="app-window-fill";
export const id="dl_d817206a374d49a99df9";
export const url=new URL("../icons/app-window-fill.svg?v=26469772dae08a0b52a1dd5b69d5da50968c54394850123e678337a32a086f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
