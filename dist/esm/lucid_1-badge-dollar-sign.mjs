export const name="lucid_1-badge-dollar-sign";
export const id="dl_e411b0dbc5f34a11bf93";
export const url=new URL("../icons/lucid_1-badge-dollar-sign.svg?v=cb86cfc4e056f36e5f1357241fcb0e17d1b79775ab66bacfbd0a2c13477cfaa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
