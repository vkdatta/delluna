export const name="equalizer-fill";
export const id="dl_75a40964da1b4adfb918";
export const url=new URL("../icons/equalizer-fill.svg?v=b3acb03de5dbc92fa63a0646420fda3f0dfb6e92a4dd4b388f088767c785e3a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
