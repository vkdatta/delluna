export const name="live_tv-fill";
export const id="dl_d85c440222ed60016fd8";
export const url=new URL("../icons/live_tv-fill.svg?v=7178dbc4fb78452994c27f1c89dd5fbdb7adf9f904675f90cefed3f8e6139293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
