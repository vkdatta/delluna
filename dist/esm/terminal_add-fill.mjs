export const name="terminal_add-fill";
export const id="dl_e2c48804961ac253230d";
export const url=new URL("../icons/terminal_add-fill.svg?v=53a955b8478c81dd9a73a56378a2632af98eaa42a8990333904072e55058f373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
