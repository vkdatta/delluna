export const name="square-round-corner";
export const id="dl_4b8c8241e6884bdd843d";
export const url=new URL("../icons/square-round-corner.svg?v=cd9e47c3f33b567a8ec44b774ce21ad460bdc5e78251af05a768a7af5da89617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
