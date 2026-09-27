export const name="square-round-corner";
export const id="dl_4b8c8241e6884bdd843d";
export const url=new URL("../icons/square-round-corner.svg?v=321dca7404e3bdcd5b1b03f633e8b223f2dd1825d2fabfa2f2499fcd8fda6309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
