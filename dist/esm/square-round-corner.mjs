export const name="square-round-corner";
export const id="dl_4b8c8241e6884bdd843d";
export const url=new URL("../icons/square-round-corner.svg?v=86888c30423e1409d6e95be945c74404108446503a783e14490594698cc14175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
