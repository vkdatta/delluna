export const name="today";
export const id="dl_e6e227b97b5c4e9ba142";
export const url=new URL("../icons/today.svg?v=903438a98e0daca88dbc846f3416122e92e2c4ec980228bf725eec84a8769128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
