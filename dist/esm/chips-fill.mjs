export const name="chips-fill";
export const id="dl_1dbc8cf51e6c704d345d";
export const url=new URL("../icons/chips-fill.svg?v=5cc5544ae14f1e6daafefb555ea956a597a6e6707aa086e95f382e4f9eae7d09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
