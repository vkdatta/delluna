export const name="magnifying-glass-plus-fill";
export const id="dl_8291e20c743e49ff89eb";
export const url=new URL("../icons/magnifying-glass-plus-fill.svg?v=36bd4dca7eec87d23057a15e7b88b0f72400fc8c8aea260710d89cf13428c597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
