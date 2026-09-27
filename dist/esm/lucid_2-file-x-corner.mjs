export const name="lucid_2-file-x-corner";
export const id="dl_a22e18aa8ab1434292d0";
export const url=new URL("../icons/lucid_2-file-x-corner.svg?v=a2bdd65f1a76381be9c1fe7cb1d3b44c968db95a5759d33b31f4a2323add37c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
